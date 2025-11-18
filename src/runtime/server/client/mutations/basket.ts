import { gql } from 'graphql-tag';
import { BasketFragment } from '../fragments/basket';

export const BasketCreateMutation = gql`
  ${BasketFragment}

  mutation basketCreateMutation(
    $basket: BasketInput!
    $includeProductBase: Boolean = false
    $includeProductInfo: Boolean = false
    $includeProductMedia: Boolean = false
    $includeProductPrices: Boolean = false
    $includeProductSeo: Boolean = false
    $includeProductDescription: Boolean = false
    $includeProductAvailability: Boolean = false
    $includeProductQuantityPrices: Boolean = false
    $includeProductOptions: Boolean = false
    $includeProductVariant: Boolean = false
    $includeProductVariantBase: Boolean = false
    $includeProductVariantInfo: Boolean = false
    $includeProductVariantMedia: Boolean = false
    $includeProductVariantPrices: Boolean = false
    $includeProductVariantSeo: Boolean = false
    $includeProductVariantDescription: Boolean = false
    $includeProductVariantAvailability: Boolean = false
    $includeProductVariantQuantityPrices: Boolean = false
    $includeProductVariantOptions: Boolean = false
  ) {
    basketCreate(basket: $basket) {
      ...Basket
    }
  }
`;

export const BasketAddItemMutation = gql`
  ${BasketFragment}

  mutation basketAddItemMutation(
    $basketId: ID!
    $productId: ID!
    $amount: Float!
    $includeProductBase: Boolean = false
    $includeProductInfo: Boolean = false
    $includeProductMedia: Boolean = false
    $includeProductPrices: Boolean = false
    $includeProductSeo: Boolean = false
    $includeProductDescription: Boolean = false
    $includeProductAvailability: Boolean = false
    $includeProductQuantityPrices: Boolean = false
    $includeProductOptions: Boolean = false
    $includeProductVariant: Boolean = false
    $includeProductVariantBase: Boolean = false
    $includeProductVariantInfo: Boolean = false
    $includeProductVariantMedia: Boolean = false
    $includeProductVariantPrices: Boolean = false
    $includeProductVariantSeo: Boolean = false
    $includeProductVariantDescription: Boolean = false
    $includeProductVariantAvailability: Boolean = false
    $includeProductVariantQuantityPrices: Boolean = false
    $includeProductVariantOptions: Boolean = false
  ) {
    basketAddItem(basketId: $basketId, productId: $productId, amount: $amount) {
      ...Basket
    }
  }
`;
