import React, { useRef } from "react";
import styled from "styled-components";
import useItems from "../../customHooks/useItems";
import { fetchedAllItemsType, itemType } from "../../types";

const ListStyle = styled.div`
  background-color: #03c75a;
  width: 10rem;
  height: 5rem;
  overflow: scroll;
`;

function List() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    loading,
    error,
    data,
    hasMore,
    loadMore,
  }: fetchedAllItemsType = useItems();

  async function scrollHandler(event: React.UIEvent<HTMLElement>) {
    const {
      offsetHeight,
      scrollTop,
      scrollHeight,
    }: {
      offsetHeight: number;
      scrollTop: number;
      scrollHeight: number;
    } = event.currentTarget;

    if (offsetHeight + scrollTop >= scrollHeight - 5 && hasMore && loadMore) {
      await loadMore();
      if (scrollRef.current !== null) scrollRef.current.scrollTop = scrollTop;
    }
  }

  if (loading) return <p>loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  return (
    <ListStyle onScroll={scrollHandler} ref={scrollRef}>
      {data.getItems.map((item: itemType) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </ListStyle>
  );
}

export default List;
