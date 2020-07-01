import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMeasure } from "react-use"

import {
  ReferenceWrapper,
  ButtonWrapper,
  InnerReferenceWrapper,
  MovingReferenceWrapper,
  StyledHeading,
  StyledContentWrapper,
  DirectionButton,
  StyledArrow,
  FooterBottom,
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
  const [ref, { width }] = useMeasure()
  const contentWidth = references.length * 300 + (references.length - 1) * 20
  const [slideProgress, setSlideProgress] = useState(0)

  const slide = direction => {
    setSlideProgress(prevState => {
      if (direction === "right") {
        if (prevState + 300 >= contentWidth - width) {
          return contentWidth - width
        } else {
          return prevState + 300
        }
      } else if (direction === "left") {
        if (prevState - 300 < 0) {
          return 0
        } else {
          return prevState - 300
        }
      }
    })
  }

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
            <DirectionButton onClick={() => slide("left")}>
              <StyledArrow />
            </DirectionButton>

            <DirectionButton right="right" onClick={() => slide("right")}>
              <StyledArrow />
            </DirectionButton>

            <InnerReferenceWrapper ref={ref}>
              <MovingReferenceWrapper
                referencesCount={references.length}
                animate={{ x: -slideProgress }}
              >
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
