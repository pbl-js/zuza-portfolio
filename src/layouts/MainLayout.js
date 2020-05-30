import React from "react"
import GlobalStyle from "utils/globalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "utils/theme"

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>{children}</div>
      </ThemeProvider>
    </>
  )
}

export default MainLayout
