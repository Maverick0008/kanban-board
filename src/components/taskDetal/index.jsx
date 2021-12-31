import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  TaskDetalWrapper,
  TaskDetalHeader,
  TaskDetalTitle,
  TaskDetalButtonClose,
  TaskDetalDescription,
  TaskDetalEdit,
  ButtonEdit,
  TextArea,
} from "./TaskDetalElements";
const TaskDetal = (props) => {
  const { tasks, setTasks } = props;
  const [openForm, setOpenForm] = React.useState(false)
  const params = useParams();
  const task = tasks.find((task) => task.id === Number(params.taskId));
  const addNewDesc = React.useRef();

  const changeDescription = () => {
    if (addNewDesc.current.value) {
      const uptatingDesc = tasks.map((task) =>
        task.id === Number(params.taskId)
          ? { ...task, description: addNewDesc.current.value }
          : task
      );

      setTasks(uptatingDesc);
    }
    setOpenForm(false)
  };

  return (
    <>
      <TaskDetalWrapper>
        <TaskDetalHeader>
          <TaskDetalTitle>{task.title}</TaskDetalTitle>
          <TaskDetalButtonClose>
            <Link to="/" />
          </TaskDetalButtonClose>
        </TaskDetalHeader>

        <TaskDetalDescription>
          {task.description || "(no description)"}{" "}
        </TaskDetalDescription>

        <TaskDetalEdit>
            {!openForm ?  <ButtonEdit onClick={() => setOpenForm(true)}>Edit Desc</ButtonEdit> :
            <>
            <TextArea placeholder="Enter new description..." ref={addNewDesc} />
          <ButtonEdit onClick={changeDescription}>
            Changes Description
          </ButtonEdit></>}
         
          
        </TaskDetalEdit>
      </TaskDetalWrapper>
    </>
  );
};

export default TaskDetal;
