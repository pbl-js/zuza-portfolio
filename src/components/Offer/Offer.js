import React from "react"

import SectionWrapper from "components/SectionWrapper/SectionWrapper"
import H1 from "components/H1/H1"

const Offer = ({ id, color, forwardRef }) => {
  return (
    <SectionWrapper id={id} color={color} forwardRef={forwardRef}>
      <H1>
        Give your brand a voice by engaging your customers with your business's
        values. Original content allows you to:
      </H1>

      <H1 stroke>My expert knowledge include, but are not limited to:</H1>
    </SectionWrapper>
  )
}

export default Offer
