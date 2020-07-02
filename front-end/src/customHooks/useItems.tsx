import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_ITEMS } from "../queries";
import {
  itemConnectionType,
  edgesType,
  pageInfoType,
  fetchedAllItemsType,
  fetchedPaginationType,
} from "../types";

function useItems(): fetchedAllItemsType {
  const { data, loading, error, fetchMore }: fetchedPaginationType = useQuery(
    GET_ALL_ITEMS,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  if (loading) return { loading };
  if (error || !data) return { error };

  const loadMore = () => {
    return fetchMore({
      query: GET_ALL_ITEMS,
      notifyOnNetworkStatusChange: true,
      variables: {
        cursor: data.getItems.pageInfo.endCursor,
      },

      updateQuery: (
        previousResult: itemConnectionType,
        { fetchMoreResult }: { fetchMoreResult: itemConnectionType }
      ) => {
        const newEdges: edgesType = fetchMoreResult.getItems.edges;
        const pageInfo: pageInfoType = fetchMoreResult.getItems.pageInfo;

        const result: itemConnectionType = {
          getItems: {
            __typename: previousResult.getItems.__typename,
            edges: [...previousResult.getItems.edges, ...newEdges],
            pageInfo,
          },
        };

        return newEdges.length ? result : previousResult;
      },
    });
  };

  return {
    loading,
    data: { getItems: data.getItems.edges.map(({ node }) => node) },
    hasMore: data.getItems.pageInfo.hasNextPage,
    loadMore,
  };
}

export default useItems;
