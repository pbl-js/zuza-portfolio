import React from "react"
import Link from "gatsby-link"
import slugify from "slugify"

import {
  ItemWrapper,
  StyledImage,
  InnerWrapper,
  Line,
} from "./ArticleItem.style"

const ArticleItem = ({ title, topics, image }) => {
  const slug = slugify(title, { lower: true })
  const link = `/portfolio/${slug}`
  console.log(link)

  return (
    <Link to={link}>
      <ItemWrapper>
        <Line />

        <StyledImage fixed={image.fixed} />

        <InnerWrapper>
          <h2>{title}</h2>
          <ul>
            {topics.map(topic => (
              <li key={topic.id}>{topic.topicItem}</li>
            ))}
          </ul>
        </InnerWrapper>
        <Line bottom />
      </ItemWrapper>
    </Link>
  )
}

export default ArticleItem
