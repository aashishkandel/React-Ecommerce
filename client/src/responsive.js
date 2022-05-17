import { css } from "styled-components";

export const phone = (props) => {
  return css`
    @media only screen and (max-width: 440px) {
      ${props}
    }
  `;
};
