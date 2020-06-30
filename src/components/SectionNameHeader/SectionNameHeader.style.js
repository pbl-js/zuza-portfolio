import styled from "styled-components"
import { motion } from "framer-motion"
import { SIZES } from "utils/mediaQueries"

import { fontWeight } from "utils/typography"

export const StyledHeader = styled.header`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

export const TextLine = styled(motion.div)`
  display: flex;
  text-transform: uppercase;
  color: var(--primary-color);
  font-size: 12vw;
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.4rem;
  line-height: 100%;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: var(--secondary-color);
  @media ${SIZES.tablet} {
    font-size: 8vw;
  }
  @media ${SIZES.tablet} {
    font-size: 6vw;
  }
  @media ${SIZES.desktop} {
    font-size: 4vw;
  }
`

export const SingleWord = styled.div`
  color: ${({ filled, theme }) => filled && "var(--secondary-color)"};
`
