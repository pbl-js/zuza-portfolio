import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link, animateScroll as scroll } from "react-scroll"

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

const liItems = ["offer", "portfolio", "about", "contact"]

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const navVariants = {
    open: { height: "100%", transition: { duration: 0.2 } },
    closed: { height: "auto", transition: { duration: 0.2, delay: 0.5 } },
  }

  const logoVariants = {
    open: { scale: 3, y: "10vh", transition: { duration: 0.2 } },
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
          <li>
            <Link to="offer" smooth={true} duration={500} offset={-100}>
              Offer
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} offset={-100}>
              Portfolio
            </Link>
          </li>
          <li>
            <Logo>
              <LogoIcon onClick={() => scroll.scrollToTop()} />
            </Logo>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-100}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
              Contact
            </Link>
          </li>
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
              <Link
                to={item}
                smooth={true}
                duration={500}
                delay={700}
                offset={-100}
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </MobileUl>
      </MobileNav>
    </StyledNav>
  )
}

export default Navigation
