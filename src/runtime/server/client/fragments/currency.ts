import { gql } from 'graphql-tag';

export const CurrencyFragment = gql`
  fragment Currency on Currency {
    name
  }
`;
