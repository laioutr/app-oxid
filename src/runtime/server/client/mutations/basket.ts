import { gql } from 'graphql-tag';
import { BasketFragment } from '../fragments/basket';

export const BasketCreateMutation = gql`
  ${BasketFragment}

  mutation basketCreateMutation($basket: BasketInput!) {
    basketCreate(basket: $basket) {
      ...Basket
    }
  }
`;

export const BasketAddItemMutation = gql`
  ${BasketFragment}

  mutation basketAddItemMutation($basketId: ID!, $productId: ID!, $amount: Float!) {
    basketAddItem(basketId: $basketId, productId: $productId, amount: $amount) {
      ...Basket
    }
  }
`;
