import { CartAddItemsAction } from '@laioutr-core/canonical-types/ecommerce';
import { defineOxidAction } from '../../middleware/defineOxid';

export default defineOxidAction(CartAddItemsAction, async ({ context, input }) => {
  const oxidClient = context.oxid.client;
  const basketId = context.oxid.basketId;

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
