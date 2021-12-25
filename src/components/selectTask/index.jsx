import React from "react";
import styled from "./SelectTask.module.scss";
import SelectTaskIcon from "../../assets/selectTask.svg";
import { LIST_TYPES } from "../../config";
const SelectTask = ({ tasks, setTasks, title, dropDownTask }) => {
  const [isActive, setActive] = React.useState(false);

  const handleChange = (e) => {
   
    const idArray = dropDownTask.find((x) => e.target.value === x.title);
    console.log(idArray);
    const updateTasks = tasks.map((task) => {
      if (task.id === idArray.id) {
        if (title === "In Progress") {
          return { ...task, status: LIST_TYPES.IN_PROGRESS };
        }
        if (title === "Finished") {
          return { ...task, status: LIST_TYPES.DONE};
        }
        if (title === "Ready") {
          return { ...task, status: LIST_TYPES.READY };
        }
      }
      return task;
    });
    setTasks(updateTasks);
    setActive(false)
  };
  return (
    <>
      <div className={styled.customSelect}>
        <select onChange={handleChange} value={""}></select>
        {isActive && (
          <div className={styled.optionWrapper}>
            {dropDownTask.map((task) => {
              return (
                <option
                  className={styled.taskSelect}
                  value={task.title}
                  key={Math.random() * 1000}
                  onClick={handleChange}
                >
                  {task.title}
                </option>
              );
            })}
          </div>
        )}

        <div
          onClick={(e) => setActive(!isActive)}
          className={styled.customArrow}
        >
          <img src={SelectTaskIcon} alt="selectTaskIcon"></img>
        </div>
      </div>
    </>
  );
};
export default SelectTask;

// import React from "react";
// // import selectTask from "../../assets/selectTask.svg";
// // import {
// //   Dropdown,
// //   DropdownBtn,
// //   DropdownContent,
// //   DropdownItem,
// // } from "./SelectTaskElements";
// // const SelectTask = () => {
// //   const [isActive, setActive] = React.useState(false);

//   return (
//     <>

//       {/* <Dropdown>
//         <DropdownBtn onClick={(e) => setActive(!isActive)}>
//           <img src={selectTask} alt={selectTask} />
//         </DropdownBtn>
//         {isActive && <DropdownContent>

//               <DropdownItem>j</DropdownItem>

//         </DropdownContent>} */}

//       {/* </Dropdown> */}
//     </>
//   );

// export default SelectTask;
