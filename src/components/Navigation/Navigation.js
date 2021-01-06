import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import TransitionLink from "gatsby-plugin-transition-link"

import {
  StyledMenu,
  MotionLogo,
  StyledLogo,
  MobileUl,
  MobileNav,
  DesktopNav,
} from "./Navigation.style"

const liItems = ["home", "portfolio", "about", "contact"]

const Navigation = ({ homepage }) => {
  const [open, setOpen] = useState(false)

  const navVariants = {
    open: { height: "100%", transition: { duration: 0.2 } },
    closed: { height: "60px", transition: { duration: 0.2, delay: 0.5 } },
  }

  const logoVariants = {
    open: {
      height: "150px",
      width: "150px",
      y: "10vh",
      transition: { duration: 0.2 },
    },
    closed: {
      height: "35px",
      width: "35px",
      y: "0px",
      transition: { duration: 0.2, delay: 0.4 },
    },
  }

  const ulVariants = {
    open: {
      display: "flex",
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2,
        staggerDirection: 1,
      },
    },
    closed: {
      display: "none",
      transition: {
        delay: 0.4,
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0,
        staggerDirection: -1,
      },
    },
  }

  const liVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.1 },
    },
    closed: { opacity: 0, transition: { duration: 0.1 } },
  }

  return (
    <>
      <DesktopNav>
        <ul>
          <StyledLogo onClick={() => scroll.scrollToTop()}></StyledLogo>

          {liItems.map(item => (
            <li key={item}>
              {homepage ? (
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  {item}
                </ScrollLink>
              ) : (
                <TransitionLink to={`/#${item}`}>{item}</TransitionLink>
              )}
            </li>
          ))}
        </ul>
      </DesktopNav>

      <MobileNav variants={navVariants} animate={open ? "open" : "closed"}>
        <MotionLogo variants={logoVariants}>
          <StyledLogo />
        </MotionLogo>

        <StyledMenu onClick={() => setOpen(prevOpen => !prevOpen)} />

        <MobileUl variants={ulVariants} initial="closed">
          {liItems.map(item => (
            <motion.li key={item} variants={liVariants}>
              {homepage ? (
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  delay={700}
                  offset={-100}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </ScrollLink>
              ) : (
                <TransitionLink
                  exit={{ delay: 0.7 }}
                  to={`/#${item}`}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </TransitionLink>
              )}
            </motion.li>
          ))}
        </MobileUl>
      </MobileNav>
    </>
  )
}

export default Navigation
