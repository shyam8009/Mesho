import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: false, // Set to false to ensure instant updates while testing locally
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
