import React, { createContext, useState, useCallback } from "react"
import { colors } from "utils/colors"

export const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState("hero")

  const themeChooser = useCallback(() => {
    switch (theme) {
      case "hero":
        return colors.hero
      case "primary":
        return colors.primary
      case "secondary":
        return colors.secondary
      case "tertiary":
        return colors.tertiary
      case "quaternary":
        return colors.quaternary
      default:
        return colors.tertiary
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeChooser }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
