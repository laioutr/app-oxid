import { createPassthroughToken } from '#imports';
import { Basket, CategoryFragment, ProductFragment } from '../../../generated/types';

export const categoriesPassthroughToken = createPassthroughToken<CategoryFragment[]>('@laioutr-app/oxid/categoriesPassthroughToken');

export const productsPassthroughToken = createPassthroughToken<ProductFragment[]>('@laioutr-app/oxid/productsPassthroughToken');
export const variantsPassthroughToken = createPassthroughToken<Omit<ProductFragment, 'variants'>[]>(
  '@laioutr-app/oxid/variantsPassthroughToken'
);

export const cartFragmentToken = createPassthroughToken<Basket>('@laioutr-app/oxid/cartFragment');

export const suggestionResultsFragmentToken = createPassthroughToken<Array<{ id: string; type: string; title: string; url: string }>>(
  '@laioutr/app-oxid/suggestionResults'
);
