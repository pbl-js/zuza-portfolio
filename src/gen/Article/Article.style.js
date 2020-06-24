import styled from "styled-components"
import { SIZES } from "utils/mediaQueries"
import layout from "utils/layout"
import { fontSize, fontWeight } from "utils/typography"
import { strokeText } from "utils/styledMixins"

export const Title = styled.h1`
  ${strokeText}
  font-size: ${fontSize.xxxl};
  text-align: center;
  line-height: 100%;
  margin: 50px 0;
`

export const StyledContent = styled.div`
  width: 100%;
  text-align: justify;
  color: ${({ theme }) => theme.dark};
  font-size: ${fontSize.s};

  img {
    width: 100%;

    @media ${SIZES.tablet} {
      width: 50%;
    }
  }

  p {
    margin-bottom: 15px;
  }

  a {
    color: white;
    text-decoration: underline;
  }

  h2 {
    position: relative;
    text-align: center;
    margin: 50px 0;
    padding: 30px 0;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: ${({ theme }) => theme.dark};
      opacity: 0.5;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: ${({ theme }) => theme.dark};
      opacity: 0.5;
    }
  }

  h3 {
    margin-top: 40px;
    padding-bottom: 20px;
    margin-bottom: 30px;
    font-size: ${fontSize.m};
    width: 100%;
    border-bottom: 1px solid;
  }

  h5 {
    font-size: ${fontSize.xxs};
    /* text-align: center; */
  }
`

export const LinksWrapper = styled.ul`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 5px dotted;
  width: 100%;
  list-style: none;
  color: ${({ theme }) => theme.dark};
  font-size: ${fontSize.s};
  overflow: hidden;
  li {
    display: flex;
  }

  a {
    margin-left: 10px;
    color: white;
    text-decoration: underline;
    margin-bottom: 15px;
  }
`
