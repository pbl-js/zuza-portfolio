import React from "react"
import { graphql } from "gatsby"

import SEO from "components/seo"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </>
)

export const query = graphql`
  query {
    datoCmsPersonalinfo {
      email
    }
  }
`

export default IndexPage
