import { createPassthroughToken } from '#imports';
import { Basket, Category, Product } from '../../../generated/types';

export const categoriesPassthroughToken = createPassthroughToken<Category[]>('@laioutr-app/oxid/categoriesPassthroughToken');

export const productsPassthroughToken = createPassthroughToken<Product[]>('@laioutr-app/oxid/productsPassthroughToken');
export const variantsPassthroughToken = createPassthroughToken<Product[]>('@laioutr-app/oxid/variantsPassthroughToken');

export const cartFragmentToken = createPassthroughToken<Basket>('@laioutr-app/oxid/cartFragment');
