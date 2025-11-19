import { gql } from 'graphql-tag';
import { VendorFragment } from '../fragments/vendor';

export const VendorQuery = gql`
  ${VendorFragment}

  query vendorQuery {
    vendors {
      ...Vendor
    }
  }
`;
