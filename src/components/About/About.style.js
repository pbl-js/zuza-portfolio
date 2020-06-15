import styled from "styled-components"
import { SIZES } from "utils/mediaQueries"
import { fontSize, fontWeight } from "utils/typography"

import H1 from "components/H1/H1"
import InfoBox from "components/InfoBox/InfoBox"
import Dots from "components/Dots/Dots"

export const AboutHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media ${SIZES.mobileL} {
    grid-template-columns: 1fr 1fr;
  }

  ul {
    position: relative;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 30px;
    svg {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @media ${SIZES.mobileL} {
        width: 120%;
        height: 120%;
      }
    }
  }
`

export const StyledBox = styled(InfoBox)`
  z-index: 2;
  margin-bottom: 20px;
  transform: rotate(${({ secondary }) => (secondary ? "5deg" : "-5deg")})
    translateX(${({ secondary }) => (secondary ? "20px" : "0")});
`

export const StyledH1 = styled(H1)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  margin: auto 0;
  margin-bottom: 50px;
  text-align: left;
  line-height: 120%;
  font-size: ${fontSize.xxl} !important;
  @media ${SIZES.mobileL} {
    font-size: ${fontSize.xxxl} !important;
    flex-direction: column;
    margin-bottom: auto;
  }
  span {
    margin-right: 12px;
    line-height: 100%;
  }

  .fill {
    color: ${({ theme }) => theme.dark};
  }
`
