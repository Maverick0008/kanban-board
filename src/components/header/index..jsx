import React from "react";
import UserAvatar from "../../assets/user-avatar.svg";

import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    NavProfile, 
    NavIcon } from "./HeaderElements";

const Header = ({toogle, isOpen}) => {
  return (
    <>
      <Nav>
      <NavContainer>
        <NavLogo>Awesome Kanban Board</NavLogo>
        <NavProfile>
            <img src={UserAvatar} alt="userAvatar" />
            <NavIcon onClick={toogle}>
             <img width={12} height={8} onClick={toogle}
             src={isOpen ? require('../../assets/close-icon.svg').default : require('../../assets/Vector.svg').default } alt="navIcon" /> 
            </NavIcon>
        </NavProfile>
      </NavContainer>
    </Nav>
    </>
  );
};

export default Header;
