import styled from "styled-components"
import { motion } from "framer-motion"

import { SIZES } from "utils/mediaQueries"
import { fontWeight, fontSize } from "utils/typography"

export const StyledNav = styled(motion.nav)`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: auto;
  padding: 10px;
  border-bottom: 4px solid ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.dark};
  transition: background-color 0.5s, color 0.5s, border-bottom 0.5s;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.l};

    li {
      margin: 0 30px;
      cursor: pointer;
    }
  }
`

export const MobileNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 35px;
  grid-template-areas: "none logo menu";
  @media ${SIZES.tablet} {
    display: none;
  }
`

export const DesktopNav = styled.div`
  margin: 0 auto;
  height: 50px;
  display: none;
  @media ${SIZES.tablet} {
    display: flex;
  }
  @media ${SIZES.laptopL} {
    height: 60px;
  }
`

export const MobileUl = styled(motion.ul)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 300px;
  flex-direction: column;

  li {
    font-size: ${fontSize.xxl};
    -webkit-text-stroke: 3px;
    color: ${({ theme }) => theme.light};
    -webkit-text-stroke-color: ${({ theme }) => theme.dark};
    letter-spacing: 3px;
  }
`

export const Menu = styled.button`
  grid-area: menu;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  fill: ${({ theme }) => theme.dark};
  z-index: 10;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: 0;
  svg {
    width: 30px;
    height: 30px;
    /* margin-right: 8px; */
    @media ${SIZES.tablet} {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
  }
`

export const Logo = styled(motion.div)`
  /* position: absolute; */
  /* top: 10px;
  left: 50%; */
  /* transform: translateX(-50%) !important; */
  grid-area: logo;
  z-index: 9;
  /* left: 10%; */
  /* transform: translateX(-50%) !important; */
  height: 100%;
  margin: 0 auto;
  fill: ${({ theme }) => theme.dark};
  @media ${SIZES.tablet} {
    height: 50px;
  }
`
