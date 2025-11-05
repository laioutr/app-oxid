import { gql } from 'graphql-tag';
import { gqlDedupe } from '../../utils/gql';

export const TokenQuery = gqlDedupe(gql`
  query tokenQuery($user: String!, $pass: String!) {
    token(username: $user, password: $pass)
  }
`);
