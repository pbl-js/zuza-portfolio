import React, { useState, useEffect } from "react"
import { useAnimation } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"

import {
  MainWrapper,
  ContainerBackground,
  Container,
  Button,
} from "./CallToAction.style"
import H1 from "components/H1/H1"

const CallToAction = ({ children }) => {
  const [run, setRun] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    if (run) {
      controls.start({ backgroundPositionX: 50 })
    } else {
      controls.stop()
    }
  }, [run, controls])

  return (
    <MainWrapper>
      <Container>
        <H1 reverse="reverse" as="p">
          {children}
        </H1>
        <ScrollLink to="contact" smooth={true}>
          <Button
            onMouseEnter={() => setRun(true)}
            onMouseLeave={() => setRun(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: [1.05, 0.8, 1.05] }}
          >
            Contact me
          </Button>
        </ScrollLink>
      </Container>
      <ContainerBackground
        animate={controls}
        transition={{ loop: Infinity, ease: "linear", duration: 15 }}
      />
    </MainWrapper>
  )
}

export default CallToAction
