import { gql } from 'graphql-tag';
import { gqlDedupe } from '../../utils/gql';
import { BasketFragment } from '../fragments/basket';

export const BasketQuery = gqlDedupe(gql`
  ${BasketFragment}

  query basketQuery($basketId: ID!) {
    basket(basketId: $basketId) {
      ...Basket
    }
  }
`);
