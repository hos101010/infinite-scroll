import React, { useRef } from "react";
import styled from "styled-components";
import useItems from "../../customHooks/useItems";
import { fetchedAllItemsType, itemType } from "../../types";
import Item from "./Item";
import Loading from "../Loading";

const Wrapper = styled.div`
  border: solid 2px #e1e1e1;
`;

const Div = styled.div`
  background-color: #03c75a;
  width: 40rem;
  height: 3rem;
`;

const ListStyle = styled.div`
  width: 40rem;
  height: 30rem;
  overflow-y: scroll;
  overflow-x: hidden;
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

  if (loading)
    return (
      <Wrapper>
        <Div />
        <ListStyle>
          <Loading />
        </ListStyle>
      </Wrapper>
    );
  if (error || !data) return <p>Error :(</p>;

  return (
    <Wrapper>
      <Div />
      <ListStyle onScroll={scrollHandler} ref={scrollRef}>
        {data.getItems.map((item: itemType) => (
          <Item
            key={item.id}
            img={item.img}
            name={item.name}
            description={item.description}
            price={item.price}
            review={item.review}
          />
        ))}
      </ListStyle>
    </Wrapper>
  );
}

export default List;
