import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${css`
      * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        outline: 0;
      }

      body {
      }

      button {
        cursor: pointer;
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
    `}
`;
