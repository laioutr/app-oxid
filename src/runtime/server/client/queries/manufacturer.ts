import { gql } from 'graphql-tag';
import { gqlDedupe } from '../../utils/gql';
import { ManufacturerFragment } from '../fragments/manufacturer';

export const ManufacturerQuery = gqlDedupe(gql`
  ${ManufacturerFragment}

  query manufacturerQuery {
    manufacturers {
      ...Manufacturer
    }
  }
`);
