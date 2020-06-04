import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import GlobalStyle from "utils/globalStyle"
import { ThemeProvider } from "styled-components"

import Navigation from "components/Navigation/Navigation"
import ThemeContextProvider, { ThemeContext } from "context/ThemeContext"

const StyledMain = styled.main`
  margin-top: 72px;
  padding: 30px 0;
  height: 200vh;
`

const ContextConsumer = ({ children }) => {
  const { themeChooser } = useContext(ThemeContext)
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true)
  })

  return (
    <ThemeProvider theme={themeChooser()}>
      <GlobalStyle transition={transition} />
      <Navigation />

      <StyledMain>{children}</StyledMain>
    </ThemeProvider>
  )
}

const MainLayout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ContextConsumer children={children} />
    </ThemeContextProvider>
  )
}

export default MainLayout
