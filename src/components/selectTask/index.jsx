import React from "react";
import styled from "./SelectTask.module.scss";
const SelectTask = (props) => {
  const { setTasks, type, allTasks } = props;

  const [isClick, setIsClick] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  let dropDownTask;
  switch (type) {
    case "ready":
      dropDownTask = "backlog";
      break;

    case "inProgress":
      dropDownTask = "ready";
      break;

    default:
      dropDownTask = "inProgress";
  }
  const array = allTasks.filter((task) => task.status === dropDownTask);
  const length = array.length;
  return (
    <>
      {!isClick ? (
        <button
          className={
            length === 0 ? styled.selectButtonDisabled : styled.selectButton
          }
          onClick={() => setIsClick(true)}
          disabled={length === 0}
        >
          +Add card
        </button>
      ) : (
        <div className={styled.customSelect}>
          <select
            className={styled.select}
            onChange={(e) => setSelected(e.target.value)}
            value={selected}
          >
            <option value={""}></option>
            {array.map((task) => (
              <option className={styled.taskSelect} value={task.title}>
                {task.title}
              </option>
            ))}
          </select>
          <button
            className={styled.selectButton}
            type="text"
            onClick={() => {
              if (selected) {
                const updateTasks = allTasks.map((task) => {
                  if (selected === task.title) {
                    return { ...task, status: type };
                  }
                  return task;
                });
                setTasks(updateTasks);
                setIsClick(false);
              } else {
                setIsClick(false);
              }
            }}
          >
            + Add task
          </button>
        </div>
      )}
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
