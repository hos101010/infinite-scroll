import gql from "graphql-tag";

export const GET_ALL_ITEMS = gql`
  {
    getItems {
      id
      name
      description
      price
      review
      img
    }
  }
`;
