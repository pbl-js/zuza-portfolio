import { useEffect, useCallback } from "react"

const useScrollColor = (refs, setTheme) => {
  const { primaryRef, secondaryRef, tertiaryRef, quaternaryRef } = refs

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset

    const windowHeight = window.innerHeight
    const threshold = windowHeight * 0.4

    if (position < primaryRef.current.offsetTop - threshold && position > 1) {
      setTheme("hero")
    } else if (
      position > primaryRef.current.offsetTop - threshold &&
      position < secondaryRef.current.offsetTop - threshold
    ) {
      setTheme("primary")
    } else if (
      position > secondaryRef.current.offsetTop - threshold &&
      position < tertiaryRef.current.offsetTop - threshold
    ) {
      setTheme("secondary")
    } else if (
      position > tertiaryRef.current.offsetTop - threshold &&
      position < quaternaryRef.current.offsetTop - threshold
    ) {
      setTheme("tertiary")
    } else if (position > quaternaryRef.current.offsetTop - threshold) {
      setTheme("quaternary")
    }
  }, [setTheme, secondaryRef, tertiaryRef, quaternaryRef])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])
}

export default useScrollColor
