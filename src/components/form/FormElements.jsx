import styled from "styled-components";

export const FormGroup = styled.form`
  color: palevioletred;
  display: block;
  width: 245px;
  margin-left: 12px;
  margin-top: 15px;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: #000;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  ::placeholder {
    font-size: 14px;
  }
`;
export const Button = styled.button`
  margin-top: 20px;
  font-size: 18px;
  background: #0079bf;
  border: none;
  border-radius: 5px;
  height: 29px;
  width: 102px;
  cursor: pointer;
  color: #ffffff;
  margin-bottom: 20px;
`;
