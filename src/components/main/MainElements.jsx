import styled from "styled-components";

export const MainWrapper = styled.main`
  background: #0079bf; 
  
  
  
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
  
`;
