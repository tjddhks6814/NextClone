import { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 20px;
    min-width: 320px;
    text-align: center;
  }
  a { cursor: pointer; text-decoration: none; }
`;