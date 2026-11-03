// Tells the page whether this visitor has to opt in before the Meta pixel loads.
// EEA, UK and Switzerland. No cookie (local dev, or this function failing) is treated as opt-in.
const OPT_IN = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH',
]);

export default async (request, context) => {
  // Leave form submissions alone.
  if (request.method !== 'GET') return;
  const response = await context.next();
  const country = context.geo?.country?.code ?? '';
  context.cookies.set({
    name: 'ltz_region',
    value: OPT_IN.has(country) ? 'opt-in' : 'ok',
    path: '/',
    maxAge: 86400,
    sameSite: 'Lax',
    secure: true,
    httpOnly: false,
  });
  return response;
};

export const config = {
  path: '/*',
  excludedPath: ['/_astro/*', '/audio/*', '/*.png', '/*.jpg', '/*.xml', '/*.txt'],
  onError: 'bypass',
};
