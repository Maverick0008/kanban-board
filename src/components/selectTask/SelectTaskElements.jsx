import styled from "styled-components";
export const Dropdown = styled.div`
   width: 258px;
   position: relative;
`
export const DropdownBtn = styled.select`
   padding: 10px;
   width: 258px;
   background: #fff;
   display: flex;
   align-items: center;
   justify-content: right;
   margin-left: 12px;
   border-radius: 5px;
   cursor: pointer;
   border: none;
`
export const DropdownContent = styled.div`
   position: absolute;
   top: 110%;
   background: #fff;
   color: #000;
   width: 100%;
   margin-left: 12px;
`
export const DropdownItem = styled.option`
   cursor: pointer;
   padding: 10px 0px 10px 12px;

   :hover {
      background: #DEDEDE;
;
   }
`