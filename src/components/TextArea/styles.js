import styled, { css } from "styled-components";

export const Container = styled.div`
  ${css`
    max-width: 600px;
    width: 100%;
    height: 120px;
    margin: 50px auto 10px auto;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    textarea {
      width: 100%;
      height: 100%;
      padding: 10px 70px 10px 10px;

      border-radius: 6px;
      font-size: 16px;
    }

    abbr {
      svg {
        position: absolute;
        right: 35px;
        top: 50px;
        font-size: 25px;
      }
    }
  `}
`;
