import styled from "styled-components"
import { motion } from "framer-motion"

import { fontSize, fontWeight } from "utils/typography"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

export const TextLine = styled(motion.div)`
  display: flex;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light};
  font-size: 5vw;
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.4rem;
  line-height: 100%;
  -webkit-text-stroke: 3px;
  -webkit-text-stroke-color: ${({ theme }) => theme.dark};
`

export const SingleWord = styled.div`
  color: ${({ filled, theme }) => filled && theme.dark};
`
