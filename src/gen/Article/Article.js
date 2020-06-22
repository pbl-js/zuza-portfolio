import React from "react"
import { graphql } from "gatsby"

import { StyledContent } from "./Article.style"
import NavigationLayout from "layouts/NavigationLayout"
import ContentWrapper from "components/ContentWrapper/ContentWrapper"

export const query = graphql`
  query querySingleArticle($articleId: String!) {
    datoCmsArticle(id: { eq: $articleId }) {
      content
      title
    }
  }
`

const Article = ({ data }) => {
  console.log(data)

  return (
    <NavigationLayout>
      <ContentWrapper>
        <h1>{data.datoCmsArticle.title}</h1>

        <StyledContent
          dangerouslySetInnerHTML={{ __html: data.datoCmsArticle.content }}
        />
      </ContentWrapper>
    </NavigationLayout>
  )
}

export default Article
