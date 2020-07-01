import React, { useContext, useEffect, useState } from "react"
import GlobalStyle from "utils/globalStyle"

import ActiveTopicsContextProvider from "context/ActiveTopicsContext"

const ContextConsumer = ({ children }) => {
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true)
  }, [])

  return (
    <>
      <GlobalStyle transition={transition} />
      {children}
    </>
  )
}

const MainLayout = ({ children }) => {
  return (
    <ActiveTopicsContextProvider>
      <ContextConsumer children={children} />
    </ActiveTopicsContextProvider>
  )
}

export default MainLayout
