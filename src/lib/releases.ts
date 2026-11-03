import { getCollection, type CollectionEntry } from 'astro:content';
import { pigmentsFor } from './pigments';

export type Release = CollectionEntry<'releases'>;

// The star's own colours, plus the sea from Le Retour Tropez.
export const HOUSE_PIGMENTS = ['#7b074c', '#f02f2d', '#f5a127', '#2b6c73'];

export const ARTIST = {
  spotify: 'https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE',
  appleMusic: 'https://music.apple.com/us/artist/lost-in-tropez/1508596675',
  soundcloud: 'https://soundcloud.com/lost-in-tropez',
  youtube: 'https://www.youtube.com/channel/UC8117gg7ZoJ9lXtXPW2xcxQ',
  bandcamp: 'https://lost-in-tropez.bandcamp.com',
  tiktok: 'https://www.tiktok.com/@lost_in_tropez',
  facebook: 'https://www.facebook.com/LostInTropez/',
};

// Newest first. Drafts only appear with PUBLIC_SHOW_DRAFTS=1, so nothing leaks into the real build.
export async function getReleases(): Promise<Release[]> {
  const showDrafts = import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_DRAFTS === '1';
  const all = await getCollection('releases', ({ data }) => showDrafts || !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const pigments = async (r: Release) =>
  r.data.pigments ?? (await pigmentsFor(`./src/assets/covers/${r.id}.jpg`));

export const year = (r: Release) => r.data.date.getUTCFullYear();

export const spotifyUrl = (r: Release) => (r.data.spotify ? `https://open.spotify.com/${r.data.spotify}` : undefined);

export const outDate = (r: Release) =>
  r.data.date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', timeZone: 'UTC' });
