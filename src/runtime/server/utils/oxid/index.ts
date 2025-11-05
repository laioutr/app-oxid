import { Seo } from '~/src/generated/types';

export const extractSlugFromSeo = (seo: Pick<Seo, 'url'>) => {
  if (!seo.url) return undefined;

  const slug = seo.url.match(/\/([^/]+)\/?$/)?.[1];

  return slug;
};
