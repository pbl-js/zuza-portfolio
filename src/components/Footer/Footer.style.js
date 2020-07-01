import styled from "styled-components"
import { SIZES } from "utils/mediaQueries"
import { fontSize, fontWeight } from "utils/typography"
import { strokeText } from "utils/styledMixins"
import Arrow from "images/arrow.svg"
import { motion } from "framer-motion"

import ContentWrapper from "components/ContentWrapper/ContentWrapper"

export const ReferenceWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${SIZES.tablet} {
    flex-direction: row;
  }

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120vw;
    background-color: var(--secondary-color);
  }
`

export const StyledHeading = styled.h1`
  ${strokeText};
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  line-height: 120%;
  font-size: ${fontSize.xxl};
  margin-bottom: 20px;
  margin-right: -10px;

  span {
    margin-right: 10px;
    @media ${SIZES.tablet} {
      margin-right: 0;
    }
  }

  @media ${SIZES.tablet} {
    flex-direction: column;
    margin-bottom: 0;
    width: 120px;
    margin-right: 20px;
  }
`
export const ButtonWrapper = styled.div`
  width: 100%;
  position: relative;
  flex-grow: 1;

  @media ${SIZES.tablet} {
    width: calc(100% - 140px);
  }
`

export const InnerReferenceWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`
export const MovingReferenceWrapper = styled(motion.div)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(
    ${({ referencesCount }) => referencesCount},
    300px
  );
  height: 100%;
`

export const FooterBottom = styled.div`
  width: 100vw;
  padding: 20px 0;
  background-color: var(--secondary-color);
`

export const StyledContentWrapper = styled(ContentWrapper)`
  width: 100%;
  color: var(--primary-color);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  a {
    color: var(--primary-color);
    text-decoration: underline;
  }

  @media ${SIZES.tablet} {
    justify-content: space-between;
    text-align: left;
  }
`
export const DirectionButton = styled.button`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: ${({ right }) => (right ? "auto" : "10px")};
  right: ${({ right }) => (right ? "10px" : "auto")};
  transform: translate(${({ right }) => (right ? "50%" : "-50%")}, -50%);
  width: 45px;
  height: 45px;
  background-color: var(--secondary-color);
  border: 0;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;

  @media ${SIZES.tablet} {
    left: ${({ right }) => (right ? "auto" : 0)};
    right: ${({ right }) => (right ? 0 : "auto")};
  }

  svg {
    width: 40%;
    height: 40%;
    transform: rotate(${({ right }) => (right ? "0" : "180deg")});
  }
`

export const StyledArrow = styled(Arrow)``
