import styled from "styled-components"
import { motion } from "framer-motion"
import { fontSize, fontWeight } from "utils/typography"
import { SIZES } from "utils/mediaQueries"

import Arrow from "images/arrow.svg"

export const CategoryItem = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  border-bottom: 2px solid ${({ theme }) => theme.dark};
  @media ${SIZES.tablet} {
    padding: 20px 0;
  }

  span {
    margin-left: auto;
  }
`

export const MotionLink = styled(motion.div)`
  font-size: ${fontSize.l};
  font-weight: ${fontWeight.semiBold};
  letter-spacing: 0.4rem;
  color: ${({ theme }) => theme.light};
  -webkit-text-stroke: 1.5px;
  -webkit-text-stroke-color: ${({ theme }) => theme.dark};

  @media ${SIZES.tablet} {
    font-size: ${fontSize.xxl};
    font-weight: ${fontWeight.semiBold};
    letter-spacing: 0.7rem;
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: ${({ theme }) => theme.dark};
  }
`

export const StyledArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.dark};
  height: 40px;

  @media ${SIZES.tablet} {
    height: 60px;
  }
`
