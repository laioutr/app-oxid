import { gql } from 'graphql-tag';
import { CurrencyFragment } from './currency';
import { PriceFragment } from './price';
import { ProductFragment } from './product';

export const BasketFragment = gql`
  ${CurrencyFragment}
  ${PriceFragment}
  ${ProductFragment}

  fragment Basket on Basket {
    id
    title
    items {
      id
      amount
      product {
        ...Product
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
