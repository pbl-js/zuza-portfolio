import React, { useContext, useEffect, useState } from "react"
import GlobalStyle from "utils/globalStyle"

import ThemeContextProvider, { ThemeContext } from "context/ThemeContext"
import ActiveTopicsContextProvider from "context/ActiveTopicsContext"

const ContextConsumer = ({ children }) => {
  const { themeChooser } = useContext(ThemeContext)
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true)
  }, [])

  return (
    <>
      <GlobalStyle transition={transition} colors={themeChooser()} />
      {children}
    </>
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
