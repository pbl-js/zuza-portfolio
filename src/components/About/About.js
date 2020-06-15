import React from "react"

import { StyledH1, AboutHeader, StyledList, StyledBox } from "./About.style"
import Dots from "components/Dots/Dots"
import SectionWrapper from "components/SectionWrapper/SectionWrapper"
import CallToAction from "components/CallToAction/CallToAction"
import H1 from "components/H1/H1"

const About = ({ id, color, forwardRef }) => {
  return (
    <SectionWrapper id={id} color={color} forwardRef={forwardRef}>
      <AboutHeader>
        <StyledH1 stroke>
          <span>Engaging</span>
          <span>content</span>
          <span>makes</span>
          <span className="fill">your</span>
          <span className="fill">business</span>
          <span>stand </span>
          <span>out </span>
          <span>through:</span>
        </StyledH1>

        <ul>
          <StyledBox>Generating regular and organic traffic</StyledBox>
          <StyledBox secondary>Increasing conversion rates</StyledBox>
          <StyledBox>
            Forging rapport between clients and your message
          </StyledBox>
          <Dots />
        </ul>
      </AboutHeader>

      <CallToAction>
        Ultimately, online content delivers your business's message to the right
        audiences and ensures that the clients return.
      </CallToAction>
    </SectionWrapper>
  )
}

export default About
