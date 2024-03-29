import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "components/seo"
import setTheme from "functions/setTheme"
import DownloadMedia from "components/DownloadMedia/DownloadMedia"

import { StyledContent, Title, LinksWrapper } from "./Article.style"
import NavigationLayout from "layouts/NavigationLayout"
import ContentWrapper from "components/ContentWrapper/ContentWrapper"

export const query = graphql`
  query querySingleArticle($articleId: String!) {
    datoCmsArticle(id: { eq: $articleId }) {
      description
      content
      title
      fileToDownload {
        websiteHeaderTitle
        websiteHeaderMessage
        emailSubject
        emailMessage
        file {
          url
        }
      }
      image {
        fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid
        }
        url
      }
      topics {
        id
        topicItem
      }
      links {
        id
        description
        link
      }
    }
  }
`

const Article = ({ data }) => {
  setTheme("primary")

  return (
    <NavigationLayout>
      <SEO
        title={data.datoCmsArticle.title}
        image={data.datoCmsArticle.image.url}
        description={data.datoCmsArticle.description}
      />

      <ContentWrapper>
        <Title>{data.datoCmsArticle.title}</Title>
        <Image
          fluid={data.datoCmsArticle.image.fluid}
          style={{ width: "100%", maxHeight: "600px" }}
        />

        <StyledContent
          dangerouslySetInnerHTML={{ __html: data.datoCmsArticle.content }}
        />

        <LinksWrapper>
          {data.datoCmsArticle.links.map(link => (
            <li key={link.id}>
              {link.description}{" "}
              <a href={link.link} target="blank">
                {link.link}
              </a>
            </li>
          ))}
        </LinksWrapper>

        {data.datoCmsArticle.fileToDownload && (
          <DownloadMedia fileToDownload={data.datoCmsArticle.fileToDownload} />
        )}
      </ContentWrapper>
    </NavigationLayout>
  )
}

export default Article
