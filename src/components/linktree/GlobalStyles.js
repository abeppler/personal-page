import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS básico */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  
  /* Estilo do Header */
  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  
  /* Estilo do Footer */
  footer {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }
`;

export default GlobalStyle;
