import { Seo } from '../../../../generated/types';

export const extractSlugFromSeo = (seo: Pick<Seo, 'url'>) => {
  if (!seo.url) return undefined;

  const slug = seo.url.match(/\/([^/]+)\/?$/)?.[1];

  return slug?.split('.')[0];
};
