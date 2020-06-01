import styled from "styled-components"

import { colors } from "utils/colors"
import { fontWeight, fontSize } from "utils/typography"

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 70px;
  border-bottom: 4px solid ${colors.darkPink};
  background-color: ${colors.pink};
  color: ${colors.darkPink};

  ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.s};
    cursor: pointer;

    li {
      margin: 0 30px;
    }
  }
`
