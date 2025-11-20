import { gql } from 'graphql-tag';
import { ProductFragment } from '../fragments/product';

// All filters have to be provided separately. Providing the whole ProductFilterList input will fail (for some reason).
export const ProductsQuery = gql`
  ${ProductFragment}

  query productsQuery(
    $categoryFilter: CategoryIDFilterInput
    $titleFilter: StringFilterInput
    $vendorFilter: IDFilterInput
    $manufacturerFilter: IDFilterInput
    $pagination: PaginationFilterInput
    $sort: ProductSorting
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
    products(
      filter: { category: $categoryFilter, title: $titleFilter, vendor: $vendorFilter, manufacturer: $manufacturerFilter }
      pagination: $pagination
      sort: $sort
    ) {
      ...Product
    }
  }
`;

export const ProductQuery = gql`
  ${ProductFragment}

  query productQuery(
    $productId: ID!
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
    product(productId: $productId) {
      ...Product
    }
  }
`;
