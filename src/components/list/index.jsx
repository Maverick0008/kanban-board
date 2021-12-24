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

const List = ({title, type, tasks, addNewTask, setTasks,listTasks}) => {
const [isFormVisible, setIsFormVisible] = React.useState(false)


const handleClick =() => {
    setIsFormVisible(!isFormVisible)
    
}
let dropDownTask;
if (title === 'Ready') {
  dropDownTask = tasks.filter(task => task.status === 'backlog')
}else if (title === 'In progress') {
  dropDownTask = tasks.filter(task => task.status === 'ready')
}else if (title === 'Finished') {
  dropDownTask = tasks.filter(task => task.status === 'inProgress')
}
console.log(dropDownTask)

  return (
    <>
      <ListItem>
        <ListTitle>{title}</ListTitle>
            {listTasks.map(task => {
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
           {type !== LIST_TYPES.BACKLOG  && (
                <SelectTasks title={title} setTasks={setTasks} tasks={tasks} dropDownTask={dropDownTask}  />
            )}
      </ListItem>
    </>
  );
};

export default List;
