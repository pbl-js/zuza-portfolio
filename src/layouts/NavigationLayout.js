import React from "react"
import styled from "styled-components"

import Navigation from "components/Navigation/Navigation"
import Footer from "components/Footer/Footer"

const StyledMain = styled.main`
  padding-top: 100px;
  background-color: var(--primary-color);
  transition: background-color 0.5s;
`

const NavigationLayout = ({ children, homepage }) => {
  return (
    <>
      <Navigation homepage={homepage} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  )
}

export default NavigationLayout
