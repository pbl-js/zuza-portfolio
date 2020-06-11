import styled from "styled-components"
import InfoBox from "components/InfoBox/InfoBox"
import { SIZES } from "utils/mediaQueries"

import Dots from "components/Dots/Dots"

export const InfoBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
  margin-top: 50px;

  @media ${SIZES.tablet} {
    flex-direction: row;
  }
`

export const PrimaryInfoBox = styled(InfoBox)`
  z-index: 2;
  transform: rotate(5deg);
  margin-left: -20%;
  margin-top: 6%;
  width: 80%;

  @media ${SIZES.tablet} {
    transform: rotate(-9deg);
    margin-left: 0;
    width: 50%;
  }
`

export const SecondaryInfoBox = styled(InfoBox)`
  z-index: 2;
  transform: rotate(-9deg);
  margin-left: 5%;
  width: 80%;

  @media ${SIZES.tablet} {
    margin-top: 15%;
    margin-left: -10%;
    transform: rotate(5deg);
    width: 50%;
  }
`

export const StyledDots = styled(Dots)`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
`
