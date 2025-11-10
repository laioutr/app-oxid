import { gql } from 'graphql-tag';
import { CurrencyFragment } from './currency';

export const PriceFragment = gql`
  ${CurrencyFragment}

  fragment Price on Price {
    price
    vat
    vatValue
    currency {
      ...Currency
    }
  }
`;
