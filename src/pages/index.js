import React, { useContext, useRef } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { ThemeContext } from "context/ThemeContext"
import useScrollColor from "hooks/useScrollColor"

import SEO from "components/seo"

import NavigationLayout from "layouts/NavigationLayout"
import Portfolio from "components/Portfolio/Portfolio"
import Offer from "components/Offer/Offer"
import SectionWrapper from "components/SectionWrapper/SectionWrapper"
import CallToAction from "components/CallToAction/CallToAction"

const IndexPage = ({ data }) => {
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

      <Offer id="offer" color="primary" forwardRef={primaryRef} />

      <Portfolio id="portfolio" color="secondary" forwardRef={secondaryRef} />

      <SectionWrapper id="about" color="tertiary" forwardRef={tertiaryRef}>
        <h1>{data.datoCmsPersonalinfo.email}</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

        <CallToAction>
          Ultimately, online content delivers your business's message to the
          right audiences and ensures that the clients return.
        </CallToAction>
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        color="quaternary"
        forwardRef={quaternaryRef}
      >
        <h1>{data.datoCmsPersonalinfo.email}</h1>
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
