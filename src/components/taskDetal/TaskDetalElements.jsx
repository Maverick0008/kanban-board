import styled from "styled-components";

export const TaskDetalWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  padding-left: 20px;
  height: 548px;
 
`;
export const TaskDetalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
export const TaskDetalTitle = styled.h2`
    font-size: 24px;
    line-height: 28px;
    padding: 22px 0 0 28px;
`;
export const TaskDetalButtonClose = styled.button`
position: relative;
border: none;
cursor: pointer;
background: none;
    top: 0px;
    right: 10px;
    display: block;
    width: 32px;
    height: 32px;
    font-size: 0;
    opacity: 0.3;

    :hover {
        opacity: 1;
    }

    :before {
        position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 20px;
    background-color: #000;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
    content: '';
    }
    :after {
        position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 20px;
    background-color: #000;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
    content: '';
    transform: rotate(-45deg) translate(-50%, -50%);
    }
  
`;
export const TaskDetalDescription = styled.div`
   padding: 35px 28px;
`;
export const TaskDetalEdit = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:nowrap;
    align-items: flex-start;
`;
export const ButtonEdit = styled.button`
    margin-left: 28px;
    margin-bottom: 20px;
    cursor: pointer;
    border: none;
    padding: 5px;
    border-radius: 5px;
    background: #0067A3;
    color: #fff;
    border: 1px solid #0067A3;

    :hover {
       background : #fff ;
       color: #0067A3;
       border: 1px solid #0067A3;
       transition:  0.2s ease-in;
    }
`;

export const TextArea = styled.textarea`
margin-left: 28px;
margin-bottom: 20px;
    width: 200px;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`