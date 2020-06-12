import styled from "styled-components"
import InfoBox from "components/InfoBox/InfoBox"
import { SIZES } from "utils/mediaQueries"
import { fontSize, fontWeight } from "utils/typography"

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

export const KnowledgeGrid = styled.ul`
  width: 70%;
  margin: 100px 40px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  /* grid-gap: 10px; */

  @media ${SIZES.mobileL} {
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    grid-gap: 0px;
  }

  @media ${SIZES.tablet} {
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
    margin: 100px 0;
  }

  @media ${SIZES.laptop} {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 80px;
  }

  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`

export const KnowledgeItem = styled(InfoBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.medium};
  letter-spacing: 2px;
  transform: rotate(${({ secondary }) => (secondary ? "10deg" : "-10deg")});
  margin-top: -10%;
  list-style: none;

  @media ${SIZES.tablet} {
    margin-top: ${({ secondary }) => (secondary ? "-10%" : "10%")};
  }

  svg {
    fill: ${({ theme, secondary }) => (secondary ? theme.light : theme.dark)};

    width: 55px;
    height: 55px;
    margin-bottom: 20px;

    @media ${SIZES.mobileL} {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
    }

    @media ${SIZES.tablet} {
      width: 40px;
      height: 40px;
      margin-bottom: 20px;
    }

    @media ${SIZES.laptop} {
      width: 55px;
      height: 55px;
      margin-bottom: 20px;
    }
  }
`
