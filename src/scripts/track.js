// Meta pixel, behind consent. Does nothing until PUBLIC_META_PIXEL_ID is set on Netlify.
const PIXEL_ID = import.meta.env.PUBLIC_META_PIXEL_ID;
const CHOICE = 'ltz_pixel_choice';

let on = false;
let waiting = false;
let listener = null;
const queue = [];

const read = () => { try { return localStorage.getItem(CHOICE); } catch { return null; } };
const write = (v) => { try { localStorage.setItem(CHOICE, v); } catch { /* private mode */ } };
const region = () => document.cookie.match(/(?:^|; )ltz_region=([^;]+)/)?.[1];

function loadPixel() {
  /* eslint-disable */
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
  on = true;
  queue.splice(0).forEach(send);
}

const send = (e) => window.fbq(e.custom ? 'trackCustom' : 'track', e.name, e.data, { eventID: e.eventID });

export function track(name, data = {}, custom = false) {
  const eventID = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  const e = { name, data, custom, eventID };
  listener?.(e);
  if (on) send(e);
  else if (waiting) queue.push(e);
}

// EU, UK and Swiss visitors choose first; so does anyone the region cookie can't place.
// A browser's Global Privacy Control signal counts as no.
export function initTracking() {
  if (!PIXEL_ID || navigator.globalPrivacyControl) return;
  const choice = read();
  if (choice === 'no') return;
  if (choice === 'yes' || region() === 'ok') return loadPixel();

  const banner = document.getElementById('consent');
  if (!banner) return;
  waiting = true;
  banner.hidden = false;
  const close = (v) => { write(v); banner.hidden = true; waiting = false; };
  document.getElementById('consent-yes').addEventListener('click', () => { close('yes'); loadPixel(); });
  document.getElementById('consent-no').addEventListener('click', () => { close('no'); queue.length = 0; });
}

export const onTrack = (fn) => { listener = fn; };
export const trackingState = () => ({ pixel: PIXEL_ID ? 'set' : 'none', loaded: on, waiting, region: region() ?? 'none', choice: read() ?? 'none' });
