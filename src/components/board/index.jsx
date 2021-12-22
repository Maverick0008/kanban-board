import React from "react";
import { LIST_TYPES, LIST_COPY } from "../../config";
import { BoardContainer } from "./BoardElements";
import List from "../list";
const Board = (props) => {
  const { tasks, setTasks } = props;
  const addNewTask = (title) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      description: "",
      status: LIST_TYPES.BACKLOG
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <>
      <BoardContainer>
        {/*Проходимся по значениям LIST_TYPES и вытаскиваем данные */}
        {Object.values(LIST_TYPES).map((type) => {
          const listTasks = tasks.filter((task) => task.status === type);
          return (
            <List
              key={type}
              type={type}
              tasks={listTasks}
              addNewTask={addNewTask}
              title={LIST_COPY[type]}
            />
          );
        })}
      </BoardContainer>
    </>
  );
};

export default Board;
