import styled from "styled-components"
import { SIZES } from "utils/mediaQueries"
import layout from "utils/layout"

const ContentWrapper = styled.div`
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
export default ContentWrapper
