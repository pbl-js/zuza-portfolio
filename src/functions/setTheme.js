import { colors } from "utils/colors"

const setTheme = color => {
  // let html = typeof document !== "undefined" ? document.documentElement : null

  if (typeof document !== "undefined") {
    let html = document.documentElement

    switch (color) {
      case "hero":
        html.style.setProperty("--primary-color", colors.hero.dark)
        html.style.setProperty("--secondary-color", colors.hero.light)
        break

      case "primary":
        html.style.setProperty("--primary-color", colors.primary.dark)
        html.style.setProperty("--secondary-color", colors.primary.light)
        break

      case "secondary":
        html.style.setProperty("--primary-color", colors.secondary.dark)
        html.style.setProperty("--secondary-color", colors.secondary.light)
        break

      case "tertiary":
        html.style.setProperty("--primary-color", colors.tertiary.dark)
        html.style.setProperty("--secondary-color", colors.tertiary.light)
        break

      case "quaternary":
        html.style.setProperty("--primary-color", colors.quaternary.dark)
        html.style.setProperty("--secondary-color", colors.quaternary.light)
        break

      default:
        html.style.setProperty("--primary-color", colors.primary.dark)
        html.style.setProperty("--secondary-color", colors.primary.light)
        break
    }
  }
}

export default setTheme
