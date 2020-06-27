import React, { createContext, useState, useCallback } from "react"
import {
  heroTheme,
  primaryTheme,
  secondaryTheme,
  tertiaryTheme,
  quaternaryTheme,
} from "utils/themes"

export const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState("hero")

  const themeChooser = useCallback(() => {
    switch (theme) {
      case "hero":
        return heroTheme
      case "primary":
        return primaryTheme
      case "secondary":
        return secondaryTheme
      case "tertiary":
        return tertiaryTheme
      case "quaternary":
        return quaternaryTheme
      default:
        return tertiaryTheme
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeChooser }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
