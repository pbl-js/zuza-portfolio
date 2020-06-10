import styled from "styled-components"
import { motion } from "framer-motion"
import layout from "utils/layout"
import { SIZES } from "utils/mediaQueries"
import { fontSize, fontWeight } from "utils/typography"

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  /* height: 400px; */
  margin: 50px 0;
  background-color: ${({ theme }) => theme.dark};
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  height: 100%;
  padding: 50px ${layout.mainPadding.mobile};
  max-width: ${layout.maxWidth};
  color: ${({ theme }) => theme.light};

  button {
    margin-top: 20px;
  }
  @media ${SIZES.tablet} {
    padding: 50px ${layout.mainPadding.tablet};
  }

  @media ${SIZES.laptop} {
    padding: 50px ${layout.mainPadding.desktop};
  }
`

export const ContainerBackground = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='black' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='black' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.1;
`

export const Button = styled(motion.button)`
  padding: 17px 30px;
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.medium};
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.dark};
  border: 0;
  outline: 0;
  cursor: pointer;

  @media ${SIZES.tablet} {
    padding: 20px 40px;
  }
`
