import React from "react"

import {
  StyledHeader,
  HeroContent,
  NameSurname,
  LightShadow,
  DarkShadow,
  ColorWrapper,
  StyledH1,
  BoxWrapper,
  StyledInfoBox,
  StyledLogo,
  NameSurnameWrapper,
  OverflowWrapper,
  BoxContent,
} from "./Hero.style"

const Hero = ({ image }) => {
  return (
    <StyledHeader>
      <HeroContent>
        <ColorWrapper>
          <StyledLogo />

          <NameSurnameWrapper>
            <NameSurname>ZUZA-NAZARUK</NameSurname>
            <LightShadow>ZUZA-NAZARUK</LightShadow>
          </NameSurnameWrapper>
        </ColorWrapper>
      </HeroContent>

      <BoxContent>
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
      </BoxContent>

      <StyledH1>
        I am a freelance writer who creates compelling online content on social
        and environmental issues that will give your brand a distinctive voice
      </StyledH1>
    </StyledHeader>
  )
}

export default Hero
