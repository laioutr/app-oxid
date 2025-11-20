import { gql } from 'graphql-tag';
import { CategoryFragment } from '../fragments/category';

export const CategoriesQuery = gql`
  ${CategoryFragment}

  query categoriesQuery($parentIdFilter: StringFilterInput) {
    categories(filter: { parentId: $parentIdFilter }) {
      ...Category
    }
  }
`;
