import React, { useContext, useRef } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { ThemeContext } from "context/ThemeContext"
import useScrollColor from "hooks/useScrollColor"

import SEO from "components/seo"

import NavigationLayout from "layouts/NavigationLayout"
import SectionWrapper from "components/SectionWrapper/SectionWrapper"

const IndexPage = props => {
  const primaryRef = useRef(null)
  const secondaryRef = useRef(null)
  const tertiaryRef = useRef(null)
  const quaternaryRef = useRef(null)

  const { setTheme } = useContext(ThemeContext)

  useScrollColor(
    { primaryRef, secondaryRef, tertiaryRef, quaternaryRef },
    setTheme
  )

  return (
    <NavigationLayout homepage={true}>
      <SEO title="Home" />

      <SectionWrapper id="offer" color="primary" forwardRef={primaryRef}>
        <h1>{props.data.datoCmsPersonalinfo.email}</h1>
        <Link to="/portfolio/">Portfolio</Link>
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
    </NavigationLayout>
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
