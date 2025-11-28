import { gql } from 'graphql-tag';
import { ManufacturerFragment } from './manufacturer';
import { PriceFragment } from './price';
import { SeoFragment } from './seo';

export const ProductBaseFragment = gql`
  ${SeoFragment}

  fragment ProductBase on Product {
    sku
    ean
    title
    seo {
      ...Seo
    }
  }
`;

export const ProductAvailabilityFragment = gql`
  fragment ProductAvailability on Product {
    stock {
      stock
      restockDate
    }
  }
`;

export const ProductOptionsFragment = gql`
  fragment ProductOptions on Product {
    selectionLists {
      title
      fields {
        name
        value
        active
        disabled
      }
    }
  }
`;

export const ProductInfoFragment = gql`
  ${SeoFragment}
  ${ManufacturerFragment}

  fragment ProductInfo on Product {
    imageGallery {
      images {
        image
        icon
        zoom
      }
    }
    shortDescription
    longDescription
    manufacturer {
      ...Manufacturer
    }
    seo {
      ...Seo
    }
  }
`;

export const ProductMediaFragment = gql`
  fragment ProductMedia on Product {
    imageGallery {
      images {
        image
        icon
        zoom
      }
    }
  }
`;

export const ProductPricesFragment = gql`
  ${PriceFragment}

  fragment ProductPrices on Product {
    price {
      ...Price
    }
    listPrice {
      ...Price
    }
    varMinPrice
    vat
  }
`;

export const ProductSeoFragment = gql`
  fragment ProductSeo on Product {
    seo {
      ...Seo
    }
  }
`;

export const ProductDescriptionFragment = gql`
  fragment ProductDescription on Product {
    shortDescription
    longDescription
  }
`;

export const ProductQuantityPricesFragment = gql`
  fragment ProductQuantityPrices on Product {
    scalePrices {
      absoluteScalePrice
      absolutePrice
      discount
      amountFrom
      amountTo
    }
  }
`;

/** Include variants (for configurable products) with limit */
export const ProductLinkVariantsFragment = gql`
  fragment ProductLinkVariants on Product {
    variants {
      id

      ...ProductBase @include(if: $includeProductVariantBase)
      ...ProductInfo @include(if: $includeProductVariantInfo)
      ...ProductMedia @include(if: $includeProductVariantMedia)
      ...ProductPrices @include(if: $includeProductVariantPrices)
      ...ProductSeo @include(if: $includeProductVariantSeo)
      ...ProductDescription @include(if: $includeProductVariantDescription)
      ...ProductAvailability @include(if: $includeProductVariantAvailability)
      ...ProductQuantityPrices @include(if: $includeProductVariantQuantityPrices)
      ...ProductOptions @include(if: $includeProductVariantOptions)
    }
  }
`;

export const ProductFragment = gql`
  ${ProductBaseFragment}
  ${ProductInfoFragment}
  ${ProductMediaFragment}
  ${ProductPricesFragment}
  ${ProductQuantityPricesFragment}
  ${ProductSeoFragment}
  ${ProductDescriptionFragment}
  ${ProductLinkVariantsFragment}
  ${ProductAvailabilityFragment}
  ${ProductOptionsFragment}

  fragment Product on Product {
    id

    ...ProductBase @include(if: $includeProductBase)
    ...ProductInfo @include(if: $includeProductInfo)
    ...ProductMedia @include(if: $includeProductMedia)
    ...ProductPrices @include(if: $includeProductPrices)
    ...ProductSeo @include(if: $includeProductSeo)
    ...ProductDescription @include(if: $includeProductDescription)
    ...ProductAvailability @include(if: $includeProductAvailability)
    ...ProductQuantityPrices @include(if: $includeProductQuantityPrices)
    ...ProductOptions @include(if: $includeProductOptions)
    ...ProductLinkVariants @include(if: $includeProductVariant)
  }
`;
