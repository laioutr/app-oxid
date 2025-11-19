import { gql } from 'graphql-tag';

export const VendorFragment = gql`
  fragment Vendor on Vendor {
    id
    title
  }
`;
