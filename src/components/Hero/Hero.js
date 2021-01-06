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

const Hero = ({ offer, id }) => {
  return (
    <StyledHeader id={id}>
      <ColorWrapper>
        <StyledLogo />

        <NameSurnameWrapper>
          <NameSurname>ZUZA NAZARUK</NameSurname>
          <NameSurname secondary="secondary">ZUZA NAZARUK</NameSurname>
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
        I am a freelance journalist with an eye for systemic ties between
        politics, culture, and economy. I seek journalistic processes that move
        beyond the conventional to live up to the challenges of the 21st
        century.
      </StyledH1>

      <StyledArrow />
    </StyledHeader>
  )
}

export default Hero
