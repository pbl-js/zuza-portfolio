import React, { createContext, useState } from "react"
import { primaryTheme, secondaryTheme, tertiaryTheme } from "utils/themes"

export const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState("primary")

  const themeChooser = () => {
    switch (theme) {
      case "primary":
        return primaryTheme
      case "secondary":
        return secondaryTheme
      case "tertiary":
        return tertiaryTheme
      default:
        return tertiaryTheme
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeChooser }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
