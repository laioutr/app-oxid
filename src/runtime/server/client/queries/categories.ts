import { gql } from 'graphql-tag';
import { gqlDedupe } from '../../utils/gql';
import { CategoryFragment } from '../fragments/category';

export const CategoriesQuery = gqlDedupe(gql`
  ${CategoryFragment}

  query categoriesQuery {
    categories {
      ...Category
    }
  }
`);
