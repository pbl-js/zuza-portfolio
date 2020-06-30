import styled from "styled-components"
import { SIZES } from "utils/mediaQueries"
import layout from "utils/layout"
import { fontSize, fontWeight } from "utils/typography"

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 ${layout.mainPadding.mobile};
  max-width: ${layout.maxWidth};

  @media ${SIZES.tablet} {
    padding: 0 ${layout.mainPadding.tablet};
  }

  @media ${SIZES.laptop} {
    padding: 0 ${layout.mainPadding.desktop};
  }
`

export const Counter = styled.div`
  margin: 30px 0;
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.semiBold};
  color: var(--secondary-color);
`

export const TopicsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`

export const ArticleWrapper = styled.div`
  width: 100%;
`

export const TopicToggle = styled.button`
  padding: 10px 30px;
  width: 100%;
  font-size: ${fontSize.xs};
  margin-bottom: 16px;
  background-color: ${({ active, theme }) =>
    active ? "var(--secondary-color)" : "transparent"};
  border: 2px solid var(--secondary-color);
  color: ${({ active, theme }) =>
    active ? "var(--secondary-color)" : "var(--primary-color)"};
  cursor: pointer;
  outline: 0;
  /* :hover {
    text-decoration: underline;
  } */
  @media ${SIZES.mobileL} {
    font-size: ${fontSize.s};
    padding: 10px 30px;
    margin-left: 8px;
    margin-right: 8px;
    width: auto;
  }
`
