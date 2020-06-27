import React, { useContext, useRef } from "react"
import { graphql } from "gatsby"
import { ThemeContext } from "context/ThemeContext"
import useScrollColor from "hooks/useScrollColor"

import SEO from "components/seo"

import NavigationLayout from "layouts/NavigationLayout"
import Hero from "components/Hero/Hero"
import Portfolio from "components/Portfolio/Portfolio"
import Offer from "components/Offer/Offer"
import About from "components/About/About"
import Contact from "components/Contact/Contact"

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

      <Hero image={data.datoCmsPersonalinfo.image} />

      <Offer id="offer" color="primary" forwardRef={primaryRef} />

      <Portfolio id="portfolio" color="secondary" forwardRef={secondaryRef} />

      <About id="about" color="tertiary" forwardRef={tertiaryRef} />

      <Contact
        id="contact"
        color="quaternary"
        forwardRef={quaternaryRef}
        contactData={data.datoCmsPersonalinfo}
      />
    </NavigationLayout>
  )
}

export const query = graphql`
  query {
    datoCmsPersonalinfo {
      email
      phone
      linkedin
      nip
      image {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default IndexPage
