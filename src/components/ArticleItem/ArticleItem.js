import React from "react"
import {
  ItemWrapper,
  StyledImage,
  InnerWrapper,
  Line,
} from "./ArticleItem.style"

const ArticleItem = ({ title, topics, image }) => {
  return (
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
  )
}

export default ArticleItem
