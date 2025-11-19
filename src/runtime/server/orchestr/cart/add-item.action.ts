import { CartAddItemsAction } from '@laioutr-core/canonical-types/ecommerce';
import { defineOxidAction } from '../../middleware/defineOxid';

export default defineOxidAction(CartAddItemsAction, async ({ event, context, input }) => {
  const { oxidClient } = context;

  const basketId = await oxidClient.assertCurrentBasketExists({ event });

  const products = input.filter((i) => i.type === 'product');

  if (products.length > 0) {
    await Promise.all(
      products.map((product) =>
        oxidClient.addItemToBasket({
          basketId,
          productId: product.productId,
          amount: product.quantity,
        })
      )
    );
  }
});
