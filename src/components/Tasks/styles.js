import styled, { css } from "styled-components";

export const Container = styled.li`
  ${css`
    width: 100%;
    margin: 6px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 80%;
      height: 80px;
      font-size: 18px;
      text-transform: uppercase;

      color: #ffffff;

      padding: 10px;
    }

    div {
      width: 20%;
      height: 80px;
      display: flex;
      justify-content: space-around;
    }
  `}
`;
