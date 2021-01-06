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
        <StyledH1 stroke="stroke">
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
          <StyledBox secondary="secondary">
            Increasing conversion rates
          </StyledBox>
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
            Myself is the one thing that should stay out of my texts - but
            here’s an exception
          </StyledH2>
        </ListHeader>

        <AboutToggle
          title="I bridge the professional and the academic "
          description="xxx"
        >
          <motion.p variants={ChildrenVariants}>
            My academic and professional experiences have been complementing
            each other ever since my journalistic journey began. I pursued media
            theory minors and electives in both my Bachelor’s and my Masters,
            gaining insights into the role of the media in war, conflict, and
            peace processes, as well as understanding the shifting of the media
            in the new technological age. My academic experience also left me
            with an attention to detail, a scientifically rigorous approach to
            research, and a whole lot of critical thinking, all of which I
            actively use in my journalistic work.
          </motion.p>

          <motion.h4 variants={ChildrenVariants}>
            My academic experience includes: 
          </motion.h4>

          <ul>
            <motion.li variants={ChildrenVariants}>
              international relations (M.A.)
            </motion.li>

            <motion.li variants={ChildrenVariants}>
              political science 
            </motion.li>

            <motion.li variants={ChildrenVariants}>media theory</motion.li>

            <motion.li variants={ChildrenVariants}>
              international public governance (B.Sc.) 
            </motion.li>
          </ul>

          <motion.p variants={ChildrenVariants}>
            I harnessed a rich body of experiences in various fields relating to
            human rights and sustainability. Thanks to a mix of hands-on
            expertise in, among others, commercial journalism, advocacy writing,
            event management, and art curation, I gained in-depth knowledge in
            areas such as systemic sustainability and social inclusion. At the
            same time, I could look at issues such as the status quo of business
            making and power structures in those fields from an insider
            perspective.
          </motion.p>

          <motion.h4 variants={ChildrenVariants}>
            Apart from journalism, I gained professional experience in: 
          </motion.h4>

          <ul>
            <motion.li variants={ChildrenVariants}>
              Systemic sustainability (education, communication)
            </motion.li>

            <motion.li variants={ChildrenVariants}>
              Social inclusion (intersectionality, gender gap, refugee
              employment)
            </motion.li>

            <motion.li variants={ChildrenVariants}>
              Arts and culture (curation, management)
            </motion.li>

            <motion.li variants={ChildrenVariants}>
              Grassroots activism (environmentalism, feminism)  
            </motion.li>
          </ul>
        </AboutToggle>

        <AboutToggle
          title="I am an information junkie, an old school one"
          description="xxx"
        >
          <motion.p variants={ChildrenVariants}>
            I am one of the anomalies of gen Z that would not survive without
            books. I indulge in investigative, ground-breaking research, such as
            those regarding surveillance capitalism, tax havens, wealth gap,
            intercultural exchanges, or corruption. My idols include Souad
            Mehkennet and Shoshana Zuboff. If you noticed a gender bias here,
            you are right.
          </motion.p>

          <motion.p variants={ChildrenVariants}>
            Apart from a generalist perspective on the essential progressing
            issues, my devotion to books helped me achieve a high level of
            literary flexibility. I am able to create content in a wide range of
            genres and forms, going beyond news reports, feature articles, and
            analyses into case studies, online courses, guides, stories, poetry,
            and theatre plays.
          </motion.p>
        </AboutToggle>

        <AboutToggle
          title="I stay quiet and let the stories speak"
          description="xxx"
        >
          <motion.p variants={ChildrenVariants}>
            I believe in the power of personal stories, which is why
            interviewing is one of my favourite research methods. I conducted
            interviews with people from various ethnicities and minorities,
            ages, and career steps, giving every person my undivided attention
            and the comfort of informed consent. This experience, alongside my
            fluency in English, Polish, and French, provided me with an intimate
            understanding of international audiences. As a result, I can take a
            deep dive into cultures outside my own and deliver a clear,
            culturally sensitive message. 
          </motion.p>
        </AboutToggle>

        <AboutToggle title="Privately…" description="xxx">
          <motion.p variants={ChildrenVariants}>
            I'm just as human in private as in professional life. I am an inline
            skater with a passion for backpacking and slow travel. I love good
            literature, mostly non-fiction, and green tea. I hope I will still
            be on time to see the rainforests and the Great Barrier Reef.
          </motion.p>
        </AboutToggle>
      </ToggleWrapper>
    </SectionWrapper>
  )
}

export default About
