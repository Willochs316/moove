import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
    margin: 0;
    padding: 0;
    font-family: "Bw Modelica", sans-serif;
    background-color: ${({ theme }) => theme.colors.text};
    position: relative;
  }
  
  body::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
