import React from "react";
import List from "./components/List";
import styled from "styled-components";
import "./App.css";

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

function App() {
  return (
    <Div>
      <List />
    </Div>
  );
}

export default App;
