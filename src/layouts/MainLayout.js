import React, { useContext, useEffect, useState } from "react"
import GlobalStyle from "utils/globalStyle"
import { ThemeProvider } from "styled-components"

import ThemeContextProvider, { ThemeContext } from "context/ThemeContext"
import ActiveTopicsContextProvider, {
  ActiveTopicsContext,
} from "context/ActiveTopicsContext"

const ContextConsumer = ({ children }) => {
  const { themeChooser } = useContext(ThemeContext)
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true)
  }, [])

  return (
    <ThemeProvider theme={themeChooser()}>
      <GlobalStyle transition={transition} />

      {children}
    </ThemeProvider>
  )
}

const MainLayout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ActiveTopicsContextProvider>
        <ContextConsumer children={children} />
      </ActiveTopicsContextProvider>
    </ThemeContextProvider>
  )
}

export default MainLayout
