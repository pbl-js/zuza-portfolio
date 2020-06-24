import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { ThemeContext } from "context/ThemeContext"

import { StyledContent, Title, LinksWrapper } from "./Article.style"
import NavigationLayout from "layouts/NavigationLayout"
import ContentWrapper from "components/ContentWrapper/ContentWrapper"

export const query = graphql`
  query querySingleArticle($articleId: String!) {
    datoCmsArticle(id: { eq: $articleId }) {
      content
      title
      image {
        fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid
        }
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
  const { setTheme } = useContext(ThemeContext)
  useEffect(() => {
    setTheme("secondary")
  })

  return (
    <NavigationLayout>
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
      </ContentWrapper>
    </NavigationLayout>
  )
}

export default Article
