import gql from "graphql-tag";

export const GET_ALL_ITEMS = gql`
  query getAllItems($first: Int = 3, $cursor: Int) {
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
