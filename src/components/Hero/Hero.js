import React from "react"
import styled from "styled-components"
import H1 from "components/H1/H1"
import InfoBox from "components/InfoBox/InfoBox"
import SectionNameHeader from "components/SectionNameHeader/SectionNameHeader"

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
  /* color: white; */
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

const StyledInfoBox = styled(InfoBox)`
  /* color: white; */
`

const ColorWrapper = styled.div`
  height: 30vw;
  width: 30vw;
  background-color: ${({ theme }) => theme.medium};
`

const Hero = ({ image }) => {
  return (
    <StyledHeader>
      <NameSurnameWrapper>
        <ColorWrapper>
          <StyledH1 style={{ color: "white", fontSize: "122px" }}>
            ZUZA NAZARUK
          </StyledH1>
        </ColorWrapper>
      </NameSurnameWrapper>

      <div>
        <BoxWrapper>
          <StyledInfoBox>short & long blog posts </StyledInfoBox>
          <StyledInfoBox secondary="secondary">
            guides & tutorials{" "}
          </StyledInfoBox>
          <StyledInfoBox>social media posts </StyledInfoBox>
          <StyledInfoBox secondary="secondary">newsletters </StyledInfoBox>
          <StyledInfoBox>case studies </StyledInfoBox>
          <StyledInfoBox secondary="secondary">
            website & app content{" "}
          </StyledInfoBox>
        </BoxWrapper>

        <BoxWrapper>
          <StyledInfoBox secondary="secondary">
            website & app content{" "}
          </StyledInfoBox>
          <StyledInfoBox>case studies </StyledInfoBox>
          <StyledInfoBox secondary="secondary">newsletters </StyledInfoBox>
          <StyledInfoBox>social media posts </StyledInfoBox>
          <StyledInfoBox secondary="secondary">
            guides & tutorials{" "}
          </StyledInfoBox>
          <StyledInfoBox>short & long blog posts </StyledInfoBox>
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
