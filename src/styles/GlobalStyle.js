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
        width: 100%;
        min-height: 100vh;

        background-color: #182A3C;
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
