import React, { useState, useEffect } from "react"
import Image from "gatsby-image"
import { ItemWrapper } from "./ArticleItem.style"

const ArticleItem = ({ title, topics, image, activeTopics }) => {
  const topicsList = topics.map(topic => topic.topicItem)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const commonPart = topicsList.filter(topic => activeTopics.includes(topic))
    if (commonPart.length !== 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [activeTopics, topicsList])

  return (
    <ItemWrapper active="tret">
      <Image fixed={image.fixed} style={{ width: "200px", height: "100px" }} />
      {active && <h4>active</h4>}
      {topics.map(topic => (
        <p key={topic.id}>{topic.topicItem}</p>
      ))}
    </ItemWrapper>
  )
}

export default ArticleItem
