import { gql } from 'graphql-tag';
import { BasketFragment } from '../fragments/basket';

export const BasketQuery = gql`
  ${BasketFragment}

  query basketQuery($basketId: ID!) {
    basket(basketId: $basketId) {
      ...Basket
    }
  }
`;
