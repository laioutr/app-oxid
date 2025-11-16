import { gql } from 'graphql-tag';
import { gqlDedupe } from '../../utils/gql';
import { BasketFragment } from '../fragments/basket';

export const BasketQuery = gqlDedupe(gql`
  ${BasketFragment}

  query basketQuery(
    $basketId: ID!
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
    basket(basketId: $basketId) {
      ...Basket
    }
  }
`);
