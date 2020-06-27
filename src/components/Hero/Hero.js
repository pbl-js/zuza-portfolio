import React from "react"
import styled from "styled-components"
import H1 from "components/H1/H1"
import InfoBox from "components/InfoBox/InfoBox"

const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-rows: 1fr auto auto;
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
`

const StyledH1 = styled(H1)`
  max-width: 800px;
  margin-bottom: 50px;
`

const BoxWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  div {
    margin-right: 40px;
    width: auto;
  }
`

const NameSurnameWrapper = styled.div`
  flex-grow: 1;
`

const ColorWrapper = styled.div`
  height: 30vw;
  width: 30vw;
  background-color: ${({ theme }) => theme.dark};
`

const Hero = ({ image }) => {
  return (
    <StyledHeader>
      <NameSurnameWrapper>
        <ColorWrapper></ColorWrapper>
      </NameSurnameWrapper>

      <div>
        <BoxWrapper>
          <InfoBox>short & long blog posts </InfoBox>
          <InfoBox secondary="secondary">guides & tutorials </InfoBox>
          <InfoBox>social media posts </InfoBox>
          <InfoBox secondary="secondary">newsletters </InfoBox>
          <InfoBox>case studies </InfoBox>
          <InfoBox secondary="secondary">website & app content </InfoBox>
        </BoxWrapper>

        <BoxWrapper>
          <InfoBox secondary="secondary">website & app content </InfoBox>
          <InfoBox>case studies </InfoBox>
          <InfoBox secondary="secondary">newsletters </InfoBox>
          <InfoBox>social media posts </InfoBox>
          <InfoBox secondary="secondary">guides & tutorials </InfoBox>
          <InfoBox>short & long blog posts </InfoBox>
        </BoxWrapper>
      </div>

      <StyledH1>
        I am a freelance writer who creates compelling online content on social
        and environmental issues that will give your brand a distinctive voice
      </StyledH1>
    </StyledHeader>
  )
}

export default Hero
