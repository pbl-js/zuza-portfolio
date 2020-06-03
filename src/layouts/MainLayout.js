import React from "react"
import styled from "styled-components"
import GlobalStyle from "utils/globalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "utils/theme"

import Navigation from "components/Navigation/Navigation"

const StyledMain = styled.main`
  margin-top: 72px;
  padding: 30px 0;
  height: 200vh;
`

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <StyledMain>{children}</StyledMain>
      </ThemeProvider>
    </>
  )
}

export default MainLayout
