import { css } from "styled-components"

export const strokeText = css`
  letter-spacing: 2px;
  color: ${({ theme }) => theme.light};
  -webkit-text-stroke: 1.5px;
  -webkit-text-stroke-color: ${({ theme }) => theme.dark};
`
