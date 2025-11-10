import { createPassthroughToken } from '#imports';
import { Product } from '~/src/generated/types';

export const productsPassthroughToken = createPassthroughToken<Product[]>('@laioutr-app/oxid/productsPassthroughToken');
export const variantsPassthroughToken = createPassthroughToken<Product[]>('@laioutr-app/oxid/variantsPassthroughToken');
