import { createPaint, attachReactor } from './paint.js';

const $ = (id) => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const { playable, house } = JSON.parse($('home-data').textContent);

let paint = null;
try {
  paint = createPaint($('paint'), { pigments: house });
} catch (e) {
  console.warn(e);
}
if (!paint) document.documentElement.classList.add('no-gl');
if (location.search.includes('debug')) window.__paint = paint;

// A composed start, so the page is beautiful before anyone touches it.
const opening = [
  [0.09, 0.09, 2, 0.075, 0.95], [0.21, 0.02, 1, 0.07, 0.95], [0.34, 0.07, 0, 0.045, 0.7],
  [0.91, 0.16, 3, 0.08, 0.85], [0.79, 0.04, 2, 0.055, 0.8], [0.97, 0.40, 3, 0.035, 0.55],
  [0.03, 0.38, 1, 0.03, 0.5], [0.58, 0.03, 3, 0.035, 0.55],
];
// A phone is all canvas, so the same paint would cover it. Use less to keep the cloth showing.
const portrait = innerHeight > innerWidth ? 0.6 : 1;
if (paint) {
  opening.forEach(([x, y, c, size, amount], i) => {
    const go = () => paint.bloomUV(x, y, { color: house[c], size: size * (portrait < 1 ? 0.8 : 1), amount: amount * portrait, life: 1.3 });
    paint.still ? go() : setTimeout(go, 120 + i * 170);
  });
  if (paint.still) paint.settle(3);
}

// Covers leak their own pigments onto the canvas: on hover with a mouse,
// and as they reach the middle of the screen on a phone, where there is no hover.
const lastBleed = new Map();
const bleedFrom = (el, strength) => {
  if (!paint || paint.still) return;
  const now = performance.now();
  if (now - (lastBleed.get(el) || -1e9) < 1400) return;
  lastBleed.set(el, now);
  paint.bleed(el.querySelector('img').getBoundingClientRect(), JSON.parse(el.dataset.pigments), {
    count: strength > 0.7 ? 8 : 5,
    amount: 0.44 * strength,
    size: 0.065,
  });
};
const works = document.querySelectorAll('.work');
works.forEach((el) => el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') bleedFrom(el, 1); }));
const seen = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) bleedFrom(e.target, 0.75); }),
  { rootMargin: '-34% 0px -34% 0px', threshold: 0 },
);
works.forEach((el) => seen.observe(el));

// Deck
const audio = $('audio');
if (audio && playable.length) {
  let idx = 0;
  const deck = $('deck');
  const load = (i) => {
    idx = (i + playable.length) % playable.length;
    const r = playable[idx];
    audio.src = r.preview;
    $('deckArt').src = r.art;
    $('deckTitle').textContent = r.title;
    $('deckTitle').href = `/${r.slug}/`;
    $('deckOut').href = r.out;
    deck.style.setProperty('--p', 0);
  };
  load(0);

  const reactor = paint && !paint.still
    ? attachReactor(
        audio,
        (k) => {
          const c = playable[idx].pigments;
          paint.bloomUV(rand(0.04, 0.96), rand(0.02, 0.62), { color: c[Math.floor(Math.random() * c.length)], size: 0.045 + k * 0.07, amount: 0.3 + k * 0.35, life: 0.55 });
        },
        (bass, mid) => paint.setBreeze(34 + mid * 170),
      )
    : null;

  const setPlaying = (on) => {
    $('iconPlay').classList.toggle('hide', on);
    $('iconPause').classList.toggle('hide', !on);
    $('play').setAttribute('aria-label', on ? 'Pause' : 'Play');
  };
  $('play').addEventListener('click', () => {
    if (audio.paused) {
      reactor?.start();
      paint?.setPigments(playable[idx].pigments);
      audio.play();
    } else audio.pause();
  });
  $('next')?.addEventListener('click', () => {
    const wasPlaying = !audio.paused;
    load(idx + 1);
    paint?.setPigments(playable[idx].pigments);
    if (wasPlaying) { reactor?.start(); audio.play(); }
  });
  audio.addEventListener('play', () => setPlaying(true));
  audio.addEventListener('pause', () => { setPlaying(false); reactor?.stop(); paint?.setBreeze(34); });
  audio.addEventListener('timeupdate', () => deck.style.setProperty('--p', audio.currentTime / (audio.duration || 30)));
  audio.addEventListener('ended', () => paint?.setPigments(house));
}

// Contact. Netlify takes the POST; without JS the form still works through /thanks/.
const form = $('contact-form');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = $('form-status');
  const button = form.querySelector('button');
  button.disabled = true;
  status.textContent = 'Sending...';
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    });
    if (!res.ok) throw new Error(String(res.status));
    form.reset();
    status.textContent = "Thank you for your message. We'll be in touch soon.";
  } catch {
    status.textContent = "That didn't send. Please try again.";
  }
  button.disabled = false;
});
