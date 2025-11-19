import { gql } from 'graphql-tag';
import { ManufacturerFragment } from '../fragments/manufacturer';

export const ManufacturerQuery = gql`
  ${ManufacturerFragment}

  query manufacturerQuery {
    manufacturers {
      ...Manufacturer
    }
  }
`;
