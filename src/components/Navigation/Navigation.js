import React, { useState } from "react"
import { motion } from "framer-motion"

import {
  StyledNav,
  Menu,
  Logo,
  MobileUl,
  MobileNav,
  DesktopNav,
} from "./Navigation.style"
import MenuIcon from "components/MenuIcon/MenuIcon"
import LogoIcon from "components/LogoIcon/LogoIcon"

const liItems = ["Offer", "Portfolio", "About", "Contact"]

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const navVariants = {
    open: { height: "100%", transition: { duration: 0.2 } },
    closed: { height: "auto", transition: { duration: 0.2, delay: 0.5 } },
  }

  const logoVariants = {
    open: { scale: 2, y: "50px", transition: { duration: 0.2 } },
    closed: {
      scale: 1,
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
    <StyledNav variants={navVariants} animate={open ? "open" : "closed"}>
      <DesktopNav>
        <ul>
          <li>Offer</li>
          <li>Portfolio</li>
          <Logo>
            <LogoIcon />
          </Logo>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </DesktopNav>

      <MobileNav>
        <Logo variants={logoVariants}>
          <LogoIcon />
        </Logo>

        <Menu onClick={() => setOpen(prevOpen => !prevOpen)}>
          <MenuIcon />
        </Menu>

        <MobileUl variants={ulVariants} initial="closed">
          {liItems.map(item => (
            <motion.li key={item} variants={liVariants}>
              {item}
            </motion.li>
          ))}
        </MobileUl>
      </MobileNav>
    </StyledNav>
  )
}

export default Navigation
