import React from "react";
import styled from "styled-components";
import { numberWithCommas } from "../../../utils";

const imgSize: number = 6;

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-bottom: solid 1px #e1e1e1;
  width: 36rem;
  height: 6rem;
  padding: 2rem;
`;

const ImgStyled = styled.img`
  align-self: flex-end;
  src: ${(src: any): any => src};
  width: ${imgSize}rem;
  height: ${imgSize}rem;
`;

const Div = styled.div`
  margin-top: -${imgSize}rem;
  width: ${35 - imgSize}rem;
  > * {
    text-align: left;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  > h3 {
    color: #0068c3;
  }
  > h4 {
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > .review {
    color: #8f8f8f;
  }
  > .price {
    color: #fc4c4e;
    font-weight: bold;
  }
`;

function Item({
  img,
  name,
  description,
  price,
  review,
}: {
  img: string;
  name: string;
  description: string;
  price: number;
  review: number;
}) {
  return (
    <BoxStyled>
      <ImgStyled src={`/imgs/${img}`} />
      <Div>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <div className="price">{numberWithCommas(price)}원 ~</div>
        <div className="review">리뷰 {numberWithCommas(review)}</div>
      </Div>
    </BoxStyled>
  );
}

export default Item;
