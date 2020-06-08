import React from "react"
import styled from "styled-components"

import Navigation from "components/Navigation/Navigation"

const StyledMain = styled.main`
  padding-top: 100px;
  background-color: ${({ theme }) => theme.light};
  min-height: calc(100vh - 100px);
  transition: background-color 0.5s;
`

const NavigationLayout = ({ children, homepage }) => {
  return (
    <>
      <Navigation homepage={homepage} />
      <StyledMain>{children}</StyledMain>
    </>
  )
}

export default NavigationLayout
