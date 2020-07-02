import gql from "graphql-tag";

export const GET_ALL_ITEMS = gql`
  query getAllItems($first: Int = 8, $cursor: Int) {
    getItems(first: $first, cursor: $cursor) {
      edges {
        node {
          id
          name
          description
          price
          review
          img
        }
      }

      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
