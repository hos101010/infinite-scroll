import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_ITEMS } from "../../queries";

type itemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  review: number;
};

type allItemsType = {
  getItems: itemType[];
};

function List() {
  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: object; data?: allItemsType } = useQuery(
    GET_ALL_ITEMS
  );

  if (loading) return <p>loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  return (
    <>
      {data.getItems.map((item: itemType) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </>
  );
}

export default List;
