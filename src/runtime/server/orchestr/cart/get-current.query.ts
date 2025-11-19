import { GetCurrentCartQuery } from '@laioutr-core/canonical-types/ecommerce';
import { Basket } from '../../../../generated/types';
import { cartFragmentToken } from '../../const/passthroughTokens';
import { defineOxidQuery } from '../../middleware/defineOxid';

export default defineOxidQuery(GetCurrentCartQuery, async ({ context, event, passthrough }) => {
  const { oxidClient } = context;

  const { basket } = await oxidClient.getCurrentBasket({
    event,
    flags: {
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
    },
  });

  passthrough.set(cartFragmentToken, basket as Basket);

  return { id: basket.id };
});
