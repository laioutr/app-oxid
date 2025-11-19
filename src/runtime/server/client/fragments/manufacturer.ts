import { gql } from 'graphql-tag';

export const ManufacturerFragment = gql`
  fragment Manufacturer on Manufacturer {
    id
    title
  }
`;
