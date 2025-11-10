import { gql } from 'graphql-tag';
import { gqlDedupe } from '../../utils/gql';
import { BasketFragment } from '../fragments/basket';

export const BasketCreateMutation = gqlDedupe(gql`
  ${BasketFragment}

  mutation basketCreateMutation($basket: BasketInput!) {
    basketCreate(basket: $basket) {
      ...Basket
    }
  }
`);

export const BasketAddItemMutation = gqlDedupe(gql`
  ${BasketFragment}

  mutation basketAddItemMutation($basketId: ID!, $productId: ID!, $amount: Float!) {
    basketAddItem(basketId: $basketId, productId: $productId, amount: $amount) {
      ...Basket
    }
  }
`);
