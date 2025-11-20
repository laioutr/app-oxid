import { GetCurrentCartQuery } from '@laioutr-core/canonical-types/ecommerce';
import { Basket } from '../../../../generated/types';
import { cartFragmentToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';

export default defineOxidQuery(GetCurrentCartQuery, async ({ context, passthrough }) => {
  const oxidClient = context.oxid.client;

  const response = await oxidClient.getBasketById(context.oxid.basketId, {
    includeProductBase: true,
    includeProductAvailability: true,
    includeProductDescription: true,
    includeProductInfo: true,
    includeProductMedia: true,
    includeProductOptions: true,
    includeProductPrices: true,
    includeProductQuantityPrices: true,
    includeProductSeo: true,
    includeProductVariant: true,
    includeProductVariantAvailability: true,
    includeProductVariantBase: true,
    includeProductVariantDescription: true,
    includeProductVariantInfo: true,
    includeProductVariantMedia: true,
    includeProductVariantOptions: true,
    includeProductVariantPrices: true,
    includeProductVariantQuantityPrices: true,
    includeProductVariantSeo: true,
  });

  if (!response?.basket) {
    return { id: undefined };
  }

  passthrough.set(cartFragmentToken, response.basket as Basket);

  return { id: response.basket.id };
});
