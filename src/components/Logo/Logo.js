import styled from "styled-components"
import Logo from "images/zuza-logo.svg"

const StyledLogo = styled(Logo)`
  .st0 {
    fill: ${({ theme }) => theme.light};
    stroke: white;
  }

  .st1 {
    fill: white;
  }

  /* .st2 {
    fill: white;
    color: white;
  } */
`

export default StyledLogo
