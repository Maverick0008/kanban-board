import React from "react";
import Board from "../board";
import { MainWrapper, MainContainer } from "./MainElements";
const Main = props => {
  return (
    <>
      <MainWrapper>
        <MainContainer>
            <Board {...props}/>
        </MainContainer>
      </MainWrapper>
    </>
  );
};

export default Main;
