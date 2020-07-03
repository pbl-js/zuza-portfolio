import React from "react"

import {
  StyledHeader,
  NameSurname,
  ColorWrapper,
  StyledH1,
  BoxWrapper,
  StyledInfoBox,
  StyledLogo,
  NameSurnameWrapper,
  BoxContent,
  StyledArrow,
} from "./Hero.style"

const Hero = ({ offer }) => {
  return (
    <StyledHeader>
      <ColorWrapper>
        <StyledLogo />

        <NameSurnameWrapper>
          <NameSurname>ZUZA-NAZARUK</NameSurname>
          <NameSurname secondary="secondary">ZUZANAZARUK</NameSurname>
        </NameSurnameWrapper>
      </ColorWrapper>

      <BoxContent>
        <BoxWrapper>
          {offer
            .slice(0)
            .reverse()
            .map((item, index) => (
              <StyledInfoBox
                key={item.node.id}
                secondary={index % 2 === 0 ? "secondary" : null}
              >
                {item.node.name}
              </StyledInfoBox>
            ))}
          {offer
            .slice(0)
            .reverse()
            .map((item, index) => (
              <StyledInfoBox
                key={item.node.id}
                secondary={index % 2 === 0 ? "secondary" : null}
              >
                {item.node.name}
              </StyledInfoBox>
            ))}
        </BoxWrapper>

        <BoxWrapper>
          {offer.map((item, index) => (
            <StyledInfoBox
              key={item.node.id}
              secondary={index % 2 === 1 ? "secondary" : null}
            >
              {item.node.name}
            </StyledInfoBox>
          ))}
          {offer.map((item, index) => (
            <StyledInfoBox
              key={item.node.id}
              secondary={index % 2 === 1 ? "secondary" : null}
            >
              {item.node.name}
            </StyledInfoBox>
          ))}
        </BoxWrapper>
      </BoxContent>

      <StyledH1>
        I am a freelance writer who creates compelling online content on social
        and environmental issues that will give your brand a distinctive voice
      </StyledH1>

      <StyledArrow />
    </StyledHeader>
  )
}

export default Hero
