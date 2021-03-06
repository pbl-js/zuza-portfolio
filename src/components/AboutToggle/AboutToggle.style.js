import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"
import Arrow from "images/arrowDown.svg"
import { motion } from "framer-motion"

import H1 from "components/H1/H1"

export const MainWrapper = styled(motion.div)`
  position: relative;
  padding-left: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: start;
  color: var(--secondary-color);
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.medium};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 100%;
    border: 2px solid var(--secondary-color);
  }
`
export const StyledH1 = styled(H1)`
  line-height: 100%;
  text-align: left;
  font-size: ${fontSize.xxl} !important;
  font-weight: ${fontWeight.semiBold};
  letter-spacing: 0.3rem;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: var(--secondary-color);
`

export const ToggleButton = styled(motion.button)`
  margin-top: 10px;
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  font-size: ${fontSize.m};
  color: var(--secondary-color);
  cursor: pointer;
  outline: 0;

  :hover {
    text-decoration: underline;
  }
`

export const StyledArrow = styled(Arrow)`
  fill: var(--secondary-color);
  margin-left: 8px;
  height: 20px;
  transform: rotate(${({ reverse }) => (reverse ? "180deg" : 0)});
`

export const ChildrenWrapper = styled(motion.div)`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  ul {
    list-style: square !important;
    margin-left: 23px;
  }
`

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  background-color: var(--secondary-color);
`
