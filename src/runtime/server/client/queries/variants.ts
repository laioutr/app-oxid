import { gql } from 'graphql-tag';

export const VariantSelectionsQuery = gql`
  query variantSelectionsQuery($productId: String!, $varSelIds: [String!]) {
    variantSelections(productId: $productId, varSelIds: $varSelIds) {
      selections {
        label

        fields {
          name
          value
          active
          disabled
        }
      }
    }
  }
`;
