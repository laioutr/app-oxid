import { gql } from 'graphql-tag';

export const SeoFragment = gql`
  fragment Seo on Seo {
    description
    url
  }
`;
