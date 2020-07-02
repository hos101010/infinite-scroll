import connection from "../../database/connection";

type itemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  review: number;
  img: string;
  createdAt: string;
  updatedAt: string;
};

type itemConnectionType = {
  edges: Array<{
    cursor: number;
    node: itemType;
  }>;
  pageInfo: {
    endCursor: number;
    hasNextPage: boolean;
  };
};

export default {
  Query: {
    getItems: async (obj, { first, cursor }): Promise<itemConnectionType> => {
      const [items]: [Array<itemType>] = await connection.query(
        "select * from items;"
      );

      const cursorIndex: number = !cursor
        ? 0
        : items.findIndex((item) => item.id === cursor) + 1;

      const sliceOfItems: Array<itemType> = items.slice(
        cursorIndex,
        cursorIndex + first
      );

      return {
        edges: sliceOfItems.map((item) => ({
          cursor: item.id,
          node: { ...item },
        })),

        pageInfo: {
          endCursor: sliceOfItems[sliceOfItems.length - 1].id,
          hasNextPage: cursorIndex + first < items.length,
        },
      };
    },
  },
};
