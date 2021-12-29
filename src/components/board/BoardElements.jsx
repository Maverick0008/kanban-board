import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

  }
`;
