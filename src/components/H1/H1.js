import styled, { css } from "styled-components"
import { fontSize, fontWeight } from "utils/typography"
import { SIZES } from "utils/mediaQueries"

// Avaible props: reverse, stroke
const H1 = styled.h1`
  text-align: center;
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.semiBold};
  letter-spacing: 2px;
  color: ${({ theme, reverse }) =>
    reverse ? "var(--primary-color)" : "var(--secondary-color)"};

  ${({ stroke }) =>
    stroke &&
    css`
      color: ${({ theme, reverse }) =>
        reverse ? "var(--secondary-color)" : "var(--primary-color)"};
      -webkit-text-stroke: 1.5px;
      -webkit-text-stroke-color: ${({ theme, reverse }) =>
        reverse ? "var(--primary-color)" : "var(--secondary-color)"};
    `}

@media ${SIZES.tablet} {
    font-size: ${fontSize.l};   
}
`

export default H1
