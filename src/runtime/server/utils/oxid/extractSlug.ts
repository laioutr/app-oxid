import slug from 'slug';
import { Seo } from '../../../../generated/types';

/**
 * Extracts the slug from an OXID API `Seo` object.
 *
 * This function parses the provided URL, retrieves the last segment of the path,
 * and removes any file extensions (e.g., `.html`).
 *
 * @param {Pick<Seo, 'url'>} seo - The SEO object containing the URL string.
 * @returns {string | undefined} The extracted slug string, or `undefined` if the URL is missing or invalid.
 *
 * @example
 * // Standard path
 * extractSlugFromSeo({ url: 'https://shop.com/category/shoes' });
 * // Returns: 'shoes'
 *
 * @example
 * // Path with trailing slash
 * extractSlugFromSeo({ url: '/category/shoes/' });
 * // Returns: 'shoes'
 *
 * @example
 * // Path with file extension
 * extractSlugFromSeo({ url: '/products/red-t-shirt.html' });
 * // Returns: 'red-t-shirt'
 */
const extractSlugFromSeo = (seo: Pick<Seo, 'url'>) => {
  if (!seo.url) return undefined;

  const slug = seo.url.match(/\/([^/]+)\/?$/)?.[1];

  return slug?.split('.')[0];
};

interface SluggableEntity {
  id: string;
  title: string;
  seo: Pick<Seo, 'url'>;
}

const addIdToSlug = (slug: string, id: string) => `${slug}:${id}`;

/**
 * Turns a entity of given type into a slug for reference in the frontend.
 *
 * You can use `parseSlug` to reverse the process.
 */
export const extractEntitySlug = (type: 'category' | 'product', entity: SluggableEntity) => {
  const extracted = extractSlugFromSeo(entity.seo);
  const slugged = extracted ?? slug(entity.title);

  if (type === 'category') {
    return extracted || addIdToSlug(slugged, entity.id);
  }

  // Product ids are always needed for now
  return addIdToSlug(slugged, entity.id);
};
