import styled from "styled-components"
import { motion } from "framer-motion"
import { SIZES } from "utils/mediaQueries"

import { fontWeight } from "utils/typography"

export const StyledHeader = styled.header`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

export const TextLine = styled(motion.div)`
  display: flex;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light};
  font-size: 12vw;
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.4rem;
  line-height: 100%;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.dark};
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
  color: ${({ filled, theme }) => filled && theme.dark};
`
