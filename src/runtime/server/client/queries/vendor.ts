import { gql } from 'graphql-tag';
import { gqlDedupe } from '../../utils/gql';
import { VendorFragment } from '../fragments/vendor';

export const VendorQuery = gqlDedupe(gql`
  ${VendorFragment}

  query vendorQuery {
    vendors {
      ...Vendor
    }
  }
`);
