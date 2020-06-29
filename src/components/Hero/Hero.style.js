import styled, { css } from "styled-components"
import { SIZES } from "utils/mediaQueries"
import H1 from "components/H1/H1"
import InfoBox from "components/InfoBox/InfoBox"
import { fontSize, fontWeight } from "utils/typography"
import Logo from "components/Logo/Logo"
import Arrow from "images/arrow.svg"

export const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-rows: 2fr auto auto;
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
  overflow: hidden;
`

export const StyledH1 = styled(H1)`
  max-width: 800px;
  margin: 0 20px 0 20px;

  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.medium};

  @media ${SIZES.tablet} {
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.medium};
  }
`

export const BoxContent = styled.div`
  display: none;
  grid-gap: 25px;
  overflow: hidden;
  padding-bottom: 15px;

  @media ${SIZES.mobileL} {
    display: grid;
  }

  @media ${SIZES.laptop} {
    display: grid;
    grid-gap: 40px;
  }
`

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1000vw;

  div {
    margin-right: 40px;
    width: auto;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
`

export const ColorWrapper = styled.div`
  display: flex;
  z-index: 3;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vw;
  width: 80vw;
  background-color: ${({ theme }) => theme.medium};

  @media ${SIZES.tablet} {
    height: 50vw;
    width: 50vw;
  }

  @media ${SIZES.laptop} {
    height: 35vw;
    width: 35vw;
    max-width: 550px;
    max-height: 550px;
  }
`

export const NameSurnameWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200vw;
  height: 30%;
  flex-grow: 1;
`

export const NameSurname = styled.div`
  position: absolute;
  text-align: center;
  width: 200%;
  font-size: 16.5vw;
  font-weight: ${fontWeight.bold};
  color: white;
  z-index: 5;

  @media ${SIZES.tablet} {
    font-size: 9vw;
    font-weight: ${fontWeight.bold};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      margin: 10px 0 0 10px;
      color: ${({ theme }) => theme.light};
      z-index: 4;
    `}
`

export const StyledInfoBox = styled(InfoBox)`
  padding: 8px 20px;
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.regular};

  @media ${SIZES.tablet} {
    padding: 15px;
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.medium};
  }
`
export const StyledLogo = styled(Logo)`
  height: 50%;
`

export const StyledArrow = styled(Arrow)`
  width: 40px;
  height: 40px;
  margin-bottom: 40px;
  transform: rotate(90deg);
  fill: ${({ theme }) => theme.dark};
`
