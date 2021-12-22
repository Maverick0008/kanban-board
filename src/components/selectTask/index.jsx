import React from "react";
import selectTask from "../../assets/selectTask.svg";
import {
  Dropdown,
  DropdownBtn,
  DropdownContent,
  DropdownItem,
} from "./SelectTaskElements";
const SelectTask = () => {
  const [isActive, setActive] = React.useState(false);
  return (
    <>
      <Dropdown>
        <DropdownBtn onClick={(e) => setActive(!isActive)}>
          <img src={selectTask} alt={selectTask} />
        </DropdownBtn>
        {isActive && <DropdownContent>
          <DropdownItem>React</DropdownItem>
          <DropdownItem>React</DropdownItem>
        </DropdownContent>}
        
      </Dropdown>
    </>
  );
};
export default SelectTask;
