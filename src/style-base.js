import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export const App = styled.main`
  background-color: #F2F2F2;
  font-family: 'Roboto', sans-serif, Helvetica, Arial;
  width: 100%;
  height: 100vh;
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin: 0 8px;
`;