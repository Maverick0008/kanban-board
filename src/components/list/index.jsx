import React from "react";
import { LIST_TYPES } from "../../config";
import Form from "../form";
import SelectTasks from "../selectTask";
import { ListItem, ListTitle, ListTask, ListButton,ListTitleTask,LinkDescription} from "./ListElements";

const List = (props) => {
  const {  type, tasks, addNewTask,title} = props
  const [isFormVisible, setIsFormVisible] = React.useState(false);

  
  return (
    
    <>
      <ListItem>
        <ListTitle>{title}</ListTitle>
        
        {tasks.length === 0 && <ListTitleTask>The task list is empty</ListTitleTask>}
        {tasks.map((task) => {
          return (
            <LinkDescription key={task.id} to={`/tasks/${task.id}`}>
              <ListTask key={task.id}>{task.title}</ListTask>
            </LinkDescription>
          )
         
        })}
        {type === LIST_TYPES.BACKLOG ? (
          !isFormVisible ? (
            <ListButton onClick={() => setIsFormVisible(true)}>
              + Add card
            </ListButton>
          ) : (
            <Form addNewTask={addNewTask} setIsFormVisible={setIsFormVisible} />
          )
        ) : (
          <SelectTasks {...props}/>
        )}
      </ListItem>
    </>
  );
};

export default List;
