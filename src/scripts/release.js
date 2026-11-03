import { createPaint, attachReactor } from './paint.js';
import { track, initTracking, onTrack, trackingState } from './track.js';

const $ = (id) => document.getElementById(id);
const main = document.querySelector('[data-release]');
const { release, title, spotify, state } = main.dataset;
const pigments = JSON.parse(main.dataset.pigments);
const params = new URLSearchParams(location.search);

// Add ?debug=1 to see events and the hand-off link on a phone, where there's no console.
if (params.has('debug')) {
  const box = document.createElement('div');
  box.className = 'debug';
  document.body.append(box);
  const line = (t) => { const d = document.createElement('div'); d.textContent = t; box.prepend(d); };
  onTrack((e) => line(`${e.name} ${JSON.stringify(e.data)}`));
  queueMicrotask(() => {
    line(`tracking ${JSON.stringify(trackingState())}`);
    line(`spotify link: ${$('cta').href}`);
  });
}

initTracking();
const base = { release };
track('ViewContent', { content_name: title, content_ids: [release], content_type: 'product' });

// --- Getting from Instagram or Facebook into the Spotify app ---
// Universal Links don't fire inside those in-app browsers, so an open.spotify.com link lands on
// the web player. The link has to be a real tap on a real href: browsers drop the hand-off to
// the app if a script does the navigating afterwards.
function spotifyTarget(path, ua = navigator.userAgent) {
  const web = `https://open.spotify.com/${path}`;
  if (!/FBAN|FBAV|FB_IAB|FB4A|Instagram/i.test(ua)) return { href: web };
  if (/iPhone|iPad|iPod/i.test(ua)) return { href: `spotify:${path.replace('/', ':')}`, fallback: web };
  if (/Android/i.test(ua)) return { href: `intent://open.spotify.com/${path}#Intent;scheme=https;package=com.spotify.music;S.browser_fallback_url=${encodeURIComponent(web)};end` };
  return { href: web };
}

const cta = $('cta');
const target = spotify ? spotifyTarget(spotify) : { href: cta.href };
cta.href = target.href;
const hasMouse = matchMedia('(hover: hover) and (pointer: fine)').matches;
if (hasMouse) document.querySelectorAll('.cta, .more a').forEach((a) => { a.target = '_blank'; });

cta.addEventListener('click', () => {
  track('StreamClick', { ...base, platform: 'spotify', state }, true);
  // No Spotify app means nothing happened, so send them to the web player.
  if (target.fallback) setTimeout(() => { if (!document.hidden) location.href = target.fallback; }, 1200);
});
document.querySelector('.more')?.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (a) track('StreamClick', { ...base, platform: a.dataset.platform, state }, true);
});

// --- Paint: this cover's pigments, seeping out from behind this cover ---
let paint = null;
try {
  paint = createPaint($('paint'), { pigments, breeze: 30, ambient: 0.55 });
} catch (e) {
  console.warn(e);
}
if (!paint) document.documentElement.classList.add('no-gl');
if (params.has('debug')) window.__paint = paint;

const cover = $('cover');
const coverBox = () => cover.getBoundingClientRect();
const open = () => {
  if (!paint) return;
  paint.bleed(coverBox(), pigments, { count: 14, amount: 1.3, size: 0.1 });
  // A few drops out in the open, so the cloth isn't only coloured around the cover.
  [[0.92, 0.9], [0.06, 0.12], [0.9, 0.16], [0.1, 0.85]].forEach(([x, y], n) =>
    paint.bloomUV(x, y, { color: pigments[n % pigments.length], size: 0.07, amount: 0.95 }));
  if (paint.still) paint.settle(3);
};
cover.complete ? open() : cover.addEventListener('load', open, { once: true });

// --- Preview ---
const audio = $('audio');
if (audio) {
  const button = $('preview');
  const reactor = paint && !paint.still
    ? attachReactor(
        audio,
        (k) => paint.bleed(coverBox(), pigments, { count: 2, amount: 0.42 + k * 0.5, size: 0.04 + k * 0.05 }),
        (bass, mid) => paint.setBreeze(30 + mid * 170),
      )
    : null;
  let started = false;
  let half = false;
  button.addEventListener('click', () => {
    if (audio.paused) {
      reactor?.start();
      audio.play();
      if (!started) { started = true; track('PreviewPlay', base, true); }
    } else audio.pause();
  });
  const set = (playing) => {
    $('iconPlay').classList.toggle('hide', playing);
    $('iconPause').classList.toggle('hide', !playing);
    button.setAttribute('aria-label', playing ? 'Pause preview' : 'Play 30-second preview');
  };
  audio.addEventListener('play', () => set(true));
  audio.addEventListener('pause', () => { set(false); reactor?.stop(); paint?.setBreeze(30); });
  audio.addEventListener('timeupdate', () => {
    const p = audio.currentTime / (audio.duration || 30);
    button.style.setProperty('--p', p);
    if (p >= 0.5 && !half) { half = true; track('PreviewHalf', base, true); }
  });
}
