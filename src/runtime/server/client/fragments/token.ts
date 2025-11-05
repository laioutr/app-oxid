import { gql } from 'graphql-tag';

export const MoneyFragment = gql`
  fragment Token on Token {
    token
    expiresAt
  }
`;
