export type itemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  review: number;
};

export type fetchedAllItemsType = {
  data?: { getItems: itemType[] };
  loading?: boolean;
  error?: object;
  hasMore?: boolean;
  loadMore?: () => Promise<object>;
};

export type edgesType = Array<{
  cursor: number;
  node: itemType;
}>;

export type pageInfoType = {
  endCursor: number;
  hasNextPage: boolean;
};

export type itemConnectionType = {
  getItems: {
    edges: edgesType;
    pageInfo: pageInfoType;
    __typename: object;
  };
};

export type fetchedPaginationType = {
  data?: itemConnectionType;
  loading?: boolean;
  error?: object;
  fetchMore?: (arg: any) => Promise<object>;
};
