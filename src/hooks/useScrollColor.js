import { useEffect, useCallback } from "react"
import { colors } from "utils/colors"

const useScrollColor = refs => {
  const { primaryRef, secondaryRef, tertiaryRef, quaternaryRef } = refs

  const handleScroll = useCallback(() => {
    if (document !== "undefined") {
      let html = document.documentElement
      const position = window.pageYOffset

      const windowHeight = window.innerHeight
      const threshold = windowHeight * 0.4

      if (position < primaryRef.current.offsetTop - threshold && position > 1) {
        html.style.setProperty("--primary-color", colors.hero.dark)
        html.style.setProperty("--secondary-color", colors.hero.light)
      } else if (
        position > primaryRef.current.offsetTop - threshold &&
        position < secondaryRef.current.offsetTop - threshold
      ) {
        html.style.setProperty("--primary-color", colors.primary.dark)
        html.style.setProperty("--secondary-color", colors.primary.light)
      } else if (
        position > secondaryRef.current.offsetTop - threshold &&
        position < tertiaryRef.current.offsetTop - threshold
      ) {
        html.style.setProperty("--primary-color", colors.secondary.dark)
        html.style.setProperty("--secondary-color", colors.secondary.light)
      } else if (
        position >
        tertiaryRef.current.offsetTop - threshold
        // &&
        // position < quaternaryRef.current.offsetTop - threshold
      ) {
        html.style.setProperty("--primary-color", colors.tertiary.dark)
        html.style.setProperty("--secondary-color", colors.tertiary.light)
      }
      // else if (position > quaternaryRef.current.offsetTop - threshold) {
      //   html.style.setProperty("--primary-color", colors.quaternary.dark)
      //   html.style.setProperty("--secondary-color", colors.quaternary.light)
      // }
    }
  }, [secondaryRef, tertiaryRef, quaternaryRef])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])
}

export default useScrollColor
