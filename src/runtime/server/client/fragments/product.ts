import { gql } from 'graphql-tag';

export const ProductFragment = gql`
  fragment Product on Product {
    id
    sku
  }
`;
