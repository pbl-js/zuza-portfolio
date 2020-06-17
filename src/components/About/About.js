import React from "react"
import { motion } from "framer-motion"

import {
  StyledH1,
  AboutHeader,
  StyledBox,
  ToggleWrapper,
  ListHeader,
  StyledH2,
} from "./About.style"
import H1 from "components/H1/H1"
import Dots from "components/Dots/Dots"
import SectionWrapper from "components/SectionWrapper/SectionWrapper"
import CallToAction from "components/CallToAction/CallToAction"
import AboutToggle from "components/AboutToggle/AboutToggle"

const About = ({ id, color, forwardRef }) => {
  const ChildrenVariants = {
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
    },
  }
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

      <ToggleWrapper>
        <ListHeader>
          <StyledH2>
            By hiring me as your content writer, you take a step towards
            enriching your business.
          </StyledH2>
        </ListHeader>

        <AboutToggle
          title="Unique mix of professional & academic experience"
          description="I am capable of conveying well-researched messages of social importance in a lightweight yet convincing manner."
        >
          <motion.h4 variants={ChildrenVariants}>
            I have professional experience in:
          </motion.h4>

          <ul>
            <motion.li variants={ChildrenVariants}>
              sustainable lifestyle (natural cosmetics, vegetarian and vegan
              diet, zero waste and circular movements, clean tech, plastic-free
              movements, chemical-free skincare)
            </motion.li>

            <motion.li variants={ChildrenVariants}>
              social inclusion (intersectionality, gender gap, refugee
              employment)
            </motion.li>
          </ul>

          <motion.h4 variants={ChildrenVariants}>
            My academic experience expands to:
          </motion.h4>

          <ul>
            <motion.li variants={ChildrenVariants}>
              international public administration
            </motion.li>

            <motion.li variants={ChildrenVariants}>political science</motion.li>

            <motion.li variants={ChildrenVariants}>
              sociology and social psychology
            </motion.li>
          </ul>

          <motion.p variants={ChildrenVariants}>
            My texts are always thoroughly researched, appropriately sourced,
            and delivered on time.
          </motion.p>
        </AboutToggle>

        <AboutToggle
          title="Capability to create content in various forms "
          description="I engage readers to the fullest thanks to my literary flexibility."
        >
          <motion.p variants={ChildrenVariants}>
            I am able to create content in a wide range of genres and forms,
            such as long and short blog posts, lifestyle or city guides, case
            studies, or website contents, as well as more artistic forms such as
            stories, poetry, or theatre plays. Proficiency in various literary
            forms allows me to ensure integrity between the message and the form
            which enhances reader engagement.
          </motion.p>

          <motion.p variants={ChildrenVariants}>
            I spend time to understand the needs of my clients and I am highly
            flexible. I am capable of coming up with long-term content
            strategies due to my professional experience in running cultural
            organizations.
          </motion.p>

          <motion.p variants={ChildrenVariants}>
            My content is search engine optimised and social media friendly.
          </motion.p>
        </AboutToggle>

        <AboutToggle
          title="Understanding of international audiences"
          description="I can help your business expand to new markets by conveying messages in a culturally sensitive way."
        >
          <motion.p variants={ChildrenVariants}>
            My content is people-focused, which allows to create a personal
            connection between the business and its audiences.
          </motion.p>

          <motion.p variants={ChildrenVariants}>
            I have professional experience working with Europeans, Arabs,
            refugees and ethnic minorities. This experience, alongside my
            fluency in English, Polish and French, provided me with an intimate
            understanding of international audiences.
          </motion.p>
        </AboutToggle>
      </ToggleWrapper>
    </SectionWrapper>
  )
}

export default About
