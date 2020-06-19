import styled from "styled-components"
import Image from "gatsby-image"
import { SIZES } from "utils/mediaQueries"
import { fontSize, fontWeight } from "utils/typography"
import { strokeText } from "utils/styledMixins"

export const ItemWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 1fr;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.dark};
  cursor: pointer;

  @media ${SIZES.tablet} {
    grid-template-columns: 400px 1fr;
    grid-template-rows: 200px;
    height: 200px;
    margin-bottom: 0;
    border: 0;
  }

  @media ${SIZES.laptop} {
    grid-template-columns: 400px 1fr;
    height: 200px;
  }
`

export const StyledImage = styled(Image)`
  height: 100% !important;
  width: 100% !important;
`

export const InnerWrapper = styled.div`
  overflow: hidden;
  flex-grow: 1;
  padding: 30px 0 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    ${strokeText}
    line-height: 100%;
    margin-bottom: 20px;
    letter-spacing: 4px;
    font-size: ${fontSize.l};
    font-weight: ${fontWeight.semiBold};
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      list-style: none;
      padding-right: 10px;
      margin-right: 10px;
      color: ${({ theme }) => theme.dark};
      font-weight: ${fontWeight.medium};
      font-size: ${fontSize.xs};
      border-right: 1px solid ${({ theme }) => theme.dark};
    }
  }
`

export const Line = styled.span`
  display: none;
  top: ${({ bottom }) => (bottom ? "auto" : "-1px")};
  bottom: ${({ bottom }) => (bottom ? "0" : "auto")};
  left: 50%;
  width: 120vw;
  height: 1px;
  position: absolute;
  background-color: ${({ theme }) => theme.dark};
  transform: translateX(-50%);
  @media ${SIZES.tablet} {
    display: block;
  }
`
