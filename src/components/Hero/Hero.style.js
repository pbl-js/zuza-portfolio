import styled, { css } from "styled-components"
import { SIZES } from "utils/mediaQueries"
import H1 from "components/H1/H1"
import InfoBox from "components/InfoBox/InfoBox"
import { fontSize, fontWeight } from "utils/typography"
import Logo from "components/Logo/Logo"

export const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-rows: 1fr auto auto;
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
  overflow: hidden;
`

export const StyledH1 = styled(H1)`
  max-width: 800px;
  margin-bottom: 50px;
`

export const BoxContent = styled.div`
  display: grid;
  grid-gap: 40px;
  overflow: hidden;
  padding-bottom: 15px;
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
  height: 30vw;
  width: 30vw;
  background-color: ${({ theme }) => theme.medium};
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
  font-size: 9vw;
  font-weight: ${fontWeight.bold};
  color: white;
  z-index: 5;
`

export const LightShadow = styled.div`
  position: absolute;
  text-align: center;
  width: 200%;
  font-size: 9vw;
  font-weight: ${fontWeight.bold};
  color: ${({ theme }) => theme.light};
  z-index: 2;
  margin: 10px 0 0 10px;
`

export const StyledInfoBox = styled(InfoBox)`
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.medium};
`
export const StyledLogo = styled(Logo)`
  height: 50%;
`
