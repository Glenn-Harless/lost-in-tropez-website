import sharp from 'sharp';

type RGB = [number, number, number];

const toHsv = ([r, g, b]: RGB) => {
  const max = Math.max(r, g, b) / 255;
  const min = Math.min(r, g, b) / 255;
  return { s: max === 0 ? 0 : (max - min) / max, v: max };
};
const dist = (a: RGB, b: RGB) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const hex = (c: RGB) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

// k-means over a tiny copy of the cover, then favour colours that are common and saturated.
export async function pigmentsFor(path: string, count = 4): Promise<string[]> {
  const { data } = await sharp(path).resize(64, 64).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const px: RGB[] = [];
  for (let i = 0; i < data.length; i += 3) px.push([data[i], data[i + 1], data[i + 2]]);

  const k = 14;
  let centers: RGB[] = Array.from({ length: k }, (_, i) => px[Math.floor(((i + 0.5) / k) * px.length)]);
  let sizes = new Array(k).fill(0);
  for (let round = 0; round < 10; round++) {
    const sum = centers.map(() => [0, 0, 0]);
    sizes = new Array(k).fill(0);
    for (const p of px) {
      let best = 0;
      for (let c = 1; c < k; c++) if (dist(p, centers[c]) < dist(p, centers[best])) best = c;
      sizes[best]++;
      sum[best][0] += p[0]; sum[best][1] += p[1]; sum[best][2] += p[2];
    }
    centers = centers.map((c, i) => (sizes[i] ? [sum[i][0] / sizes[i], sum[i][1] / sizes[i], sum[i][2] / sizes[i]] : c)) as RGB[];
  }

  const scored = centers
    .map((c, i) => {
      const { s, v } = toHsv(c);
      // The paper is already light, so near-whites add nothing as paint.
      const score = v > 0.9 && s < 0.12 ? -1 : Math.sqrt(sizes[i]) * (0.2 + s * 1.3) * (0.4 + v * 0.6);
      return { c, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const picked: RGB[] = [];
  for (const { c } of scored) {
    if (picked.every((p) => dist(p, c) > 62)) picked.push(c);
    if (picked.length === count) break;
  }
  return picked.length ? picked.map(hex) : ['#7b074c', '#f02f2d', '#f5a127', '#2b6c73'];
}
