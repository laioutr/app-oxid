import { gql } from 'graphql-tag';
import { CurrencyFragment } from './currency';
import { PriceFragment } from './price';
import {
  ProductAvailabilityFragment,
  ProductBaseFragment,
  ProductDescriptionFragment,
  ProductInfoFragment,
  ProductMediaFragment,
  ProductOptionsFragment,
  ProductPricesFragment,
  ProductQuantityPricesFragment,
  ProductSeoFragment,
} from './product';

export const BasketFragment = gql`
  ${CurrencyFragment}
  ${PriceFragment}
  ${ProductBaseFragment}
  ${ProductInfoFragment}
  ${ProductMediaFragment}
  ${ProductPricesFragment}
  ${ProductQuantityPricesFragment}
  ${ProductSeoFragment}
  ${ProductDescriptionFragment}
  ${ProductAvailabilityFragment}
  ${ProductOptionsFragment}

  fragment Basket on Basket {
    id
    title
    items {
      id
      amount
      product {
        id
        ...ProductBase
        ...ProductInfo
        ...ProductMedia
        ...ProductPrices
        ...ProductSeo
        ...ProductDescription
        ...ProductAvailability
        ...ProductQuantityPrices
        ...ProductOptions
        variants {
          id
          ...ProductBase
          ...ProductInfo
          ...ProductMedia
          ...ProductPrices
          ...ProductSeo
          ...ProductDescription
          ...ProductAvailability
          ...ProductQuantityPrices
          ...ProductOptions
        }
      }
    }
    cost {
      voucher
      discount
      delivery {
        ...Price
      }
      total
      productNet {
        ...Price
      }
      productGross {
        sum
      }
      currency {
        ...Currency
      }
    }
  }
`;
