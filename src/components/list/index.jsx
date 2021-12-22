import React from "react";
import {LIST_TYPES} from '../../config'
import Form from "../form";
import SelectTasks from "../selectTask";
import { 
    ListItem,
    ListTitle,
    ListTask,
    ListButton

 } from "./ListElements";

const List = ({title, type, tasks, addNewTask, setTasks}) => {
const [isFormVisible, setIsFormVisible] = React.useState(false)


const handleClick =() => {
    setIsFormVisible(!isFormVisible)
    
}


  return (
    <>
      <ListItem>
        <ListTitle>{title}</ListTitle>
            {tasks.map(task => {
                return(
                    <ListTask key={task.id}>{task.title}</ListTask>
                )
            })}
             {type === LIST_TYPES.BACKLOG  &&  isFormVisible &&(
                <Form  addNewTask={addNewTask} setIsFormVisible={setIsFormVisible}/>
            )}
            {type === LIST_TYPES.BACKLOG  && (
                <ListButton onClick={handleClick}>+ Add new task</ListButton>
            )}
           {type === LIST_TYPES.READY  && (
                <SelectTasks />
            )}
      </ListItem>
    </>
  );
};

export default List;
