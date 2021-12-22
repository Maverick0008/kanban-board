import styled from "styled-components";

export const Nav = styled.nav`
  background: #0067a3;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center; ;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 55px;
  max-width: 1200px;
`;

export const NavLogo = styled.h1`
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 28px;
  align-items: center;
  margin-left: 20px;
  line-height: 33px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavProfile = styled.div`
  display: flex;
  align-items: center;
  padding-top: 7px;
  padding-right: 20px;
  position: absolute;
  top: 0;
  right: 0;
`;
export const NavIcon = styled.div`
  display: flex;
  margin-left: 7px;
  cursor: pointer;
`;
