import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  ReferenceWrapper,
  ButtonWrapper,
  InnerReferenceWrapper,
  MovingReferenceWrapper,
  StyledHeading,
  FooterMiddle,
  StyledContentWrapper,
  DirectionButton,
  StyledArrow,
  FooterBottom,
  StyledLogo,
} from "./Footer.style"
import ContentWrapper from "components/ContentWrapper/ContentWrapper"
import ReferenceItem from "components/ReferenceItem/ReferenceItem"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allDatoCmsCompanyreference {
        edges {
          node {
            id
            companyname
            content
            image {
              fixed(width: 70, height: 35) {
                ...GatsbyDatoCmsFixed
              }
            }
          }
        }
      }
    }
  `)

  const references = data.allDatoCmsCompanyreference.edges

  console.log(data)
  return (
    <footer>
      <ContentWrapper>
        <ReferenceWrapper>
          <StyledHeading>
            <span>Clients</span>
            <span>about</span>
            <span>me</span>
          </StyledHeading>

          <ButtonWrapper>
            <DirectionButton>
              <StyledArrow />
            </DirectionButton>

            <DirectionButton right="right">
              <StyledArrow />
            </DirectionButton>

            <InnerReferenceWrapper>
              <MovingReferenceWrapper referencesCount={references.length}>
                {references.map(reference => (
                  <ReferenceItem
                    key={reference.node.id}
                    companyname={reference.node.companyname}
                    image={reference.node.image}
                  >
                    {reference.node.content}
                  </ReferenceItem>
                ))}
              </MovingReferenceWrapper>
            </InnerReferenceWrapper>
          </ButtonWrapper>
        </ReferenceWrapper>

        <FooterBottom>
          <StyledContentWrapper>
            <span>© Copyright 2020 – www.zuzanazaruk.com </span>
            <span className="right">
              Need website like this? Write to me
              <a href="mailto: pblpawelmilczak@gmail.com">
                {" "}
                pblpawelmilczak@gmail.com
              </a>
            </span>
          </StyledContentWrapper>
        </FooterBottom>
      </ContentWrapper>
    </footer>
  )
}

export default Footer
