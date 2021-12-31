import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Board from "../board";
import TaskDetal from "../taskDetal";
import { MainWrapper, MainContainer } from "./MainElements";
const Main = props => {
  return (
    <>
      <MainWrapper>
        <MainContainer>
          <Routes>

            <Route exact path="/" element={<Board {...props} />} />

            <Route path="/tasks/:taskId" element={<TaskDetal  {...props}/>} />
          </Routes>
        </MainContainer>
      </MainWrapper>
    </>
  );
};

export default Main;
