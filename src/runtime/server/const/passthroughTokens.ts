import { createPassthroughToken } from '#imports';
import { PageTypeToken } from '@laioutr-core/canonical-types/page';
import { Basket, CategoryFragment, ProductFragment } from '../../../generated/types';

export const categoriesPassthroughToken = createPassthroughToken<CategoryFragment[]>('@laioutr-app/oxid/categoriesPassthroughToken');

export const productsPassthroughToken = createPassthroughToken<ProductFragment[]>('@laioutr-app/oxid/productsPassthroughToken');
export const variantsPassthroughToken = createPassthroughToken<Omit<ProductFragment, 'variants'>[]>(
  '@laioutr-app/oxid/variantsPassthroughToken'
);

export const cartFragmentToken = createPassthroughToken<Basket>('@laioutr-app/oxid/cartFragment');

export const suggestionResultsFragmentToken = createPassthroughToken<{
  id: string;
  suggestions: Array<{
    id: string;
    type: string;
    title: string;
    link:
      | { type: 'reference'; reference: { type: string; id: string; slug: string } }
      | { type: 'pageType'; pageType: PageTypeToken; params: Record<string, string> };
  }>;
}>('@laioutr/app-oxid/suggestionResults');
