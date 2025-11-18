import { gql } from 'graphql-tag';

export const TokenQuery = gql`
  query tokenQuery($user: String!, $pass: String!) {
    token(username: $user, password: $pass)
  }
`;
