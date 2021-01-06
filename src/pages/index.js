import React, { useRef } from "react"
import { graphql } from "gatsby"
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
  // const quaternaryRef = useRef(null)

  useScrollColor({ primaryRef, secondaryRef, tertiaryRef })

  return (
    <NavigationLayout homepage={true}>
      <SEO title="ZuzaNazaruk" />

      <Hero
        id="home"
        image={data.datoCmsPersonalinfo.image}
        offer={data.allDatoCmsOfferItem.edges}
      />

      {/* <Offer id="offer" color="primary" forwardRef={primaryRef} /> */}

      <Portfolio id="portfolio" color="primary" forwardRef={primaryRef} />

      <About id="about" color="secondary" forwardRef={secondaryRef} />

      <Contact
        id="contact"
        color="tertiary"
        forwardRef={tertiaryRef}
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

    allDatoCmsOfferItem {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default IndexPage
