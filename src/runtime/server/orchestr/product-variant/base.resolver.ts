import { Money } from '@screeny05/ts-money';
import {
  ProductVariantAvailability,
  ProductVariantBase,
  ProductVariantInfo,
  ProductVariantOptions,
  ProductVariantPrices,
  ProductVariantQuantityPrices,
  ProductVariantQuantityRule,
  ProductVariantShipping,
} from '@laioutr-core/canonical-types/entity/product-variant';
import { variantsPassthroughToken } from '../../const/passthroughTokens';
import { mapResponsiveProductImageFragment } from '../../mappers/media';
import { defineOxidComponentResolver } from '../../middleware/defineOxid';

const zeroMoney = Money.fromDecimal({ amount: 0, currency: 'EUR' });

export default defineOxidComponentResolver({
  label: 'OXID Product Variant Resolver',
  entityType: 'ProductVariant',
  provides: [
    ProductVariantBase,
    ProductVariantInfo,
    ProductVariantAvailability,
    ProductVariantPrices,
    ProductVariantQuantityPrices,
    ProductVariantQuantityRule,
    ProductVariantShipping,
    ProductVariantOptions,
  ],
  resolve: async ({ entityIds, context, requestedComponents, passthrough, $entity }) => {
    const oxidClient = context.oxid.client;

    const variants =
      passthrough.has(variantsPassthroughToken) ?
        passthrough.get(variantsPassthroughToken)!
      : await Promise.all(
          entityIds.map((id) =>
            oxidClient
              .getProductById(id, {
                includeProductVariant: true,
                includeProductBase: requestedComponents.includes('base'),
                includeProductInfo: requestedComponents.includes('info'),
                includeProductPrices: requestedComponents.includes('prices'),
                includeProductAvailability: requestedComponents.includes('availability'),
                includeProductOptions: requestedComponents.includes('options'),
                includeProductQuantityPrices: requestedComponents.includes('quantityPrices'),
              })
              .then((r) => r.product)
          )
        );

    const entities = variants.map((variant) => {
      const price = variant.price ? Money.fromDecimal({ amount: variant.price.price, currency: variant.price.currency.name }) : zeroMoney;

      return $entity({
        id: variant.id,

        base: () => ({
          gtin: variant.ean,
          sku: variant.sku ?? variant.id,
          name: variant.title,
        }),

        info: () => ({
          image:
            variant.imageGallery && variant.imageGallery.images.length > 0 ?
              mapResponsiveProductImageFragment(variant.imageGallery.images[0])
            : undefined,
        }),

        availability: () => ({
          status: variant.stock.stock > 0 ? 'inStock' : 'outOfStock',
          quantity: variant.stock.stock,
          availabilityDate: variant.stock.restockDate,
        }),

        prices: () => {
          const strikethroughPrice =
            variant.listPrice ?
              Money.fromDecimal({ amount: variant.listPrice.price, currency: variant.listPrice.currency.name })
            : undefined;
          const isOnSale = !!strikethroughPrice;
          const savingsPercent = strikethroughPrice ? 100 - price?.percentageOf(strikethroughPrice) : undefined;

          return {
            price,
            isOnSale,
            strikethroughPrice,
            savingsPercent,
          };
        },

        quantityPrices: () =>
          variant.scalePrices.map((p) => {
            const prc =
              p.absoluteScalePrice ?
                Money.fromDecimal({ amount: p.absolutePrice!, currency: variant.price.currency.name })
              : price.subtract(Money.fromDecimal({ amount: p.discount!, currency: variant.price.currency.name }));

            return {
              quantity: p.amountFrom,
              price: prc,
              savingsPercent: 100 - price.percentageOf(prc),
            };
          }),

        quantityRule: () => ({
          min: 0,
          max: Number.MAX_SAFE_INTEGER,
          increment: 1,
        }),

        shipping: () => ({
          required: true,
        }),

        options: () => ({
          selected: variant.variantLabels.map((label, i) => ({ name: label, value: variant.variantValues[i] ?? 'Unknown Value' })),
        }),
      });
    });

    return { entities };
  },
});
