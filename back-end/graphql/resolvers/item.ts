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

export default {
  Query: {
    getItems: async () => {
      const [result]: Array<itemType> = await connection.query(
        "select * from items;"
      );
      return result;
    },
  },
};
