import styled from "styled-components"
import { motion } from "framer-motion"
import Logo from "images/logo.svg"
import Menu from "images/menu.svg"
import layout from "utils/layout"

import { SIZES } from "utils/mediaQueries"
import { fontWeight, fontSize } from "utils/typography"

export const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  border-bottom: 4px solid var(--secondary-color);
  background-color: var(--primary-color);
  color: var(--secondary-color);
  transition: background-color 0.5s, color 0.5s, border-bottom 0.5s;
  ul {
    list-style: none;
    text-transform: uppercase;
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.l};

    a {
      cursor: pointer;
      text-decoration: none;
    }
  }
`

export const DesktopNav = styled(StyledNav)`
  display: none;
  margin: 0 auto;
  height: 70px;
  padding: 10px 0;

  ul {
    height: 100%;
    max-width: ${layout.maxWidth};
    margin: 0 auto;
    padding: 0 ${layout.mainPadding.mobile};
    display: grid;
    grid-gap: 60px;
    align-items: center;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: 1fr;
    grid-template-areas: "none none logo menu menu";
    @media ${SIZES.tablet} {
      padding: 0 ${layout.mainPadding.tablet};
    }

    @media ${SIZES.laptop} {
      padding: 0 ${layout.mainPadding.desktop};
    }

    a {
      color: var(--secondary-color);
    }
  }
  @media ${SIZES.tablet} {
    display: block;
  }
  @media ${SIZES.laptopL} {
    height: 80px;
  }
`

export const MobileNav = styled(StyledNav)`
  display: flex;
  flex-direction: column;
  height: 60px;
  padding: 10px 0;
  @media ${SIZES.tablet} {
    display: none;
  }
`

export const MobileUl = styled(motion.ul)`
  margin: 0 auto;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: ${fontSize.xxl};
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: var(--secondary-color);
    letter-spacing: 3px;
    color: var(--primary-color);
  }
`

export const MotionLogo = styled(motion.div)`
  height: 35px;
  margin: 0 auto;
`

export const StyledLogo = styled(Logo)`
  grid-area: logo;
  height: 100%;
  width: 100%;
  fill: var(--secondary-color);
  @media ${SIZES.tablet} {
    height: 100%;
  }
`

export const StyledMenu = styled(Menu)`
  position: absolute;
  top: 13px;
  right: 10px;
  width: 30px;
  height: 30px;
  fill: var(--secondary-color);
  z-index: 10;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: 0;
`
