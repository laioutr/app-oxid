import { gql } from 'graphql-tag';
import { gqlDedupe } from '../../utils/gql';
import { ProductFragment } from '../fragments/product';

export const ProductsQuery = gqlDedupe(gql`
  ${ProductFragment}

  query productsQuery($filter: ProductFilterList, $pagination: PaginationFilterInput, $sort: ProductSorting) {
    products(filter: $filter, pagination: $pagination, sort: $sort) {
      ...Product
    }
  }
`);
