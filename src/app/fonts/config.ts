import { IBM_Plex_Sans_KR } from 'next/font/google';

export const fontSans = IBM_Plex_Sans_KR({
  weight: [
    '100', // Thin : font-thin
    '200', // Extra Light : font-extralight
    '300', // Light : font-light
    '400', // Regular : font-normal
    '500', // Medium : font-medium
    '600', // Semi Bold : font-semibold
    '700', // Bold : font-bold
  ],
  subsets: ['latin', 'latin-ext'],
  preload: true,
  display: 'block',
});
