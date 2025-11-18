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
export const extractSlugFromSeo = (seo: Pick<Seo, 'url'>) => {
  if (!seo.url) return undefined;

  const slug = seo.url.match(/\/([^/]+)\/?$/)?.[1];

  return slug?.split('.')[0];
};
