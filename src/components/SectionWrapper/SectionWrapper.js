import React from "react"
import styled from "styled-components"

import SectionNameHeader from "components/SectionNameHeader/SectionNameHeader"

const StyledSection = styled.section`
  height: 200vh;
`

const SectionWrapper = ({ title, children, color, forwardRef }) => {
  return (
    <StyledSection ref={forwardRef}>
      <SectionNameHeader title={title} color={color} />
      {children}
    </StyledSection>
  )
}

export default SectionWrapper
