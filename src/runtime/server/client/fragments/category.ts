import { gql } from 'graphql-tag';

export const CategoryFragment = gql`
  fragment Category on Category {
    id
    title

    seo {
      url
    }

    parent {
      id
    }

    children {
      id
    }
  }
`;
