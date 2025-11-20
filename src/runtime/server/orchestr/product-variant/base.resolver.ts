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

    const products =
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
                includeProductVariantAvailability: requestedComponents.includes('availability'),
                includeProductVariantOptions: requestedComponents.includes('options'),
                includeProductVariantQuantityPrices: requestedComponents.includes('quantityPrices'),
              })
              .then((r) => r.product)
          )
        );

    const entities = products.map((product) => {
      const price = product.price ? Money.fromDecimal({ amount: product.price.price, currency: product.price.currency.name }) : zeroMoney;

      return $entity({
        id: product.id,

        base: () => ({
          gtin: product.ean,
          sku: product.sku ?? product.id,
          name: product.title,
        }),

        info: () => ({
          image: mapResponsiveProductImageFragment(product.imageGallery.images[0]),
        }),

        availability: () => ({
          status: product.stock.stock > 0 ? 'inStock' : 'outOfStock',
          quantity: product.stock.stock,
          availabilityDate: product.stock.restockDate,
        }),

        prices: () => {
          const strikethroughPrice =
            product.listPrice ?
              Money.fromDecimal({ amount: product.listPrice.price, currency: product.listPrice.currency.name })
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
          product.scalePrices.map((p) => {
            const prc =
              p.absoluteScalePrice ?
                Money.fromDecimal({ amount: p.absolutePrice!, currency: product.price.currency.name })
              : price.subtract(Money.fromDecimal({ amount: p.discount!, currency: product.price.currency.name }));

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
          selected: product.selectionLists.flatMap((list) =>
            list.fields.filter((field) => field.active).map((field) => ({ name: field.name, value: field.value }))
          ),
        }),
      });
    });

    return { entities };
  },
});
