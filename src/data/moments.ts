import { Author, Moment, author } from './types';

export type { Author, Moment };
export { author };

const momentFiles = import.meta.glob('./moments/*.ts', { eager: true });

const allMoments: Moment[] = Object.values(momentFiles)
  .map((mod) => (mod as { default: Moment }).default)
  .filter(Boolean);

export const moments: Moment[] = allMoments.sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
);

export const recentMoments = moments.slice(0, 6);
