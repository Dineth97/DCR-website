import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'xxqhet4x', // ඔයාගේ Sanity Project ID එක
  dataset: 'production',
  useCdn: true, // Speeds up data delivery via CDN
  apiVersion: '2026-01-01',
});

// Image URLs generate කරගන්න helper function එක
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}