import React from "react"
import { graphql } from "gatsby"

import SEO from "components/seo"

import SectionNameHeader from "components/SectionNameHeader/SectionNameHeader"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.datoCmsPersonalinfo.email}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <SectionNameHeader title="portfolio" />
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
