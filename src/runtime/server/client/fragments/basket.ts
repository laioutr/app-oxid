import { gql } from 'graphql-tag';
import { CurrencyFragment } from './currency';
import { PriceFragment } from './price';

export const BasketFragment = gql`
  ${CurrencyFragment}
  ${PriceFragment}

  fragment Basket on Basket {
    id
    title
    items {
      id
      amount
      product {
        id
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
