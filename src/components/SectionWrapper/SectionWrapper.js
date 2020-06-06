import React from "react"
import styled from "styled-components"

import SectionNameHeader from "components/SectionNameHeader/SectionNameHeader"

const StyledSection = styled.section`
  height: 200vh;
`

const SectionWrapper = ({ id, children, color, forwardRef }) => {
  return (
    <StyledSection ref={forwardRef} id={id}>
      <SectionNameHeader title={id} color={color} />
      {children}
    </StyledSection>
  )
}

export default SectionWrapper
