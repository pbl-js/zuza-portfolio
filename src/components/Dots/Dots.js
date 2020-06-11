import styled from "styled-components"
import Dots from "images/dots.svg"

const StyledDots = styled(Dots)`
  path {
    fill: ${({ theme }) => theme.dark};
  }
`

export default StyledDots
