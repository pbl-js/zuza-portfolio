import React, { useEffect, useContext, useRef, useCallback } from "react"
import { graphql } from "gatsby"
import { ThemeContext } from "context/ThemeContext"

import SEO from "components/seo"

import SectionWrapper from "components/SectionWrapper/SectionWrapper"

const IndexPage = props => {
  const primaryRef = useRef(null)
  const secondaryRef = useRef(null)
  const tertiaryRef = useRef(null)
  const quaternaryRef = useRef(null)

  const { setTheme } = useContext(ThemeContext)

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset

    const documentHeight = document.body.clientHeight
    const threshold = documentHeight * 0.4

    if (position < secondaryRef.current.offsetTop - threshold) {
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
      setTheme("tertiary")
    }
  }, [setTheme])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <SEO title="Home" />

      <SectionWrapper id="offer" color="primary" forwardRef={primaryRef}>
        <h1>{props.data.datoCmsPersonalinfo.email}</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <h1>{props.data.datoCmsPersonalinfo.email}</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </SectionWrapper>

      <SectionWrapper
        id="portfolio"
        color="secondary"
        forwardRef={secondaryRef}
      >
        <h1>{props.data.datoCmsPersonalinfo.email}</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </SectionWrapper>

      <SectionWrapper id="about" color="tertiary" forwardRef={tertiaryRef}>
        <h1>{props.data.datoCmsPersonalinfo.email}</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        color="quaternary"
        forwardRef={quaternaryRef}
      >
        <h1>{props.data.datoCmsPersonalinfo.email}</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </SectionWrapper>
    </>
  )
}

export const query = graphql`
  query {
    datoCmsPersonalinfo {
      email
    }
  }
`

export default IndexPage
