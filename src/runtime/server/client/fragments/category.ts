import { gql } from 'graphql-tag';
import { SeoFragment } from './seo';

export const CategoryFragment = gql`
  ${SeoFragment}

  fragment Category on Category {
    id
    title
    longDescription
    thumbnail

    seo {
      ...Seo
    }

    parent {
      id
    }

    children {
      id
    }
  }
`;
