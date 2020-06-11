import React from "react"
import styled from "styled-components"

import { SIZES } from "utils/mediaQueries"
import layout from "utils/layout"

import SectionNameHeader from "components/SectionNameHeader/SectionNameHeader"

const StyledSection = styled.section`
  height: 200vh;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px ${layout.mainPadding.mobile};
  max-width: ${layout.maxWidth};

  @media ${SIZES.tablet} {
    padding: 50px ${layout.mainPadding.tablet};
  }

  @media ${SIZES.laptop} {
    padding: 50px ${layout.mainPadding.desktop};
  }
`

const SectionWrapper = ({ id, children, color, forwardRef }) => {
  return (
    <StyledSection ref={forwardRef} id={id}>
      <SectionNameHeader title={id} color={color} />

      <ContentWrapper>{children}</ContentWrapper>
    </StyledSection>
  )
}

export default SectionWrapper
