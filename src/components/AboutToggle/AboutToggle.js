import React, { useState } from "react"
import {
  MainWrapper,
  StyledH1,
  ToggleButton,
  StyledArrow,
  ChildrenWrapper,
  Divider,
} from "./AboutToggle.style"

const AboutToggle = ({ children, title, description }) => {
  const [open, setOpen] = useState(false)

  const WrapperVariants = {
    open: {
      height: "100%",
      transition: {
        staggerChildren: 0.1,
      },
    },
    close: {
      height: "0px",
    },
  }

  return (
    <MainWrapper>
      <StyledH1 stroke="stroke">{title}</StyledH1>
      <p>{description}</p>
      <ChildrenWrapper
        variants={WrapperVariants}
        animate={open ? "open" : "close"}
      >
        {open && <Divider />}
        {children}
      </ChildrenWrapper>

      <ToggleButton onClick={() => setOpen(prevState => !prevState)}>
        {open ? "Hide" : "Read more"}
        <StyledArrow reverse={open ? "reverse" : null} />
      </ToggleButton>
    </MainWrapper>
  )
}

export default AboutToggle
