import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const CogStyle = styled(FontAwesomeIcon)`
  color: darkgreen;
  transform: translateX(-50%) translateY(-50%);
`;

const LoadingStyle = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

function Loading() {
  return (
    <LoadingStyle>
      <CogStyle icon={faCog} spin size="3x" />
    </LoadingStyle>
  );
}

export default Loading;
