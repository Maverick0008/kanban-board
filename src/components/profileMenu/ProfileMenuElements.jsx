import styled from "styled-components";
export const MenuContainer = styled.div`
  position: fixed;
  z-index: 999;
  height: 60px;
  width: 134px;
  background: #fff;
  display: grid;
  align-items: center;
  justify-content: start;
  top: 50px;
  right: 9px;
  border-radius: 5px;
  background: #f5f5f5;
  top: ${({ isOpen }) => (isOpen ? "1" : "-100%")};
`;

export const MenuWrapper = styled.div`
  color: #000;
`;
export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 25px);
  text-align: start;
`;
export const MenuLink = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  list-style: none;
  margin-left: 7px;
  line-height: 16px;
  cursor: pointer;
`;
