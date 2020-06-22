import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import NavigationLayout from "layouts/NavigationLayout"
import {
  ContentWrapper,
  ArticleWrapper,
  Counter,
  TopicsWrapper,
  TopicToggle,
} from "components/Portfolio.style.js"
import ArticleItem from "components/ArticleItem/ArticleItem"

const PortfolioPage = ({ data, location }) => {
  const allArticles = data.allDatoCmsArticle.edges
  const topics = data.allDatoCmsTopic.edges
  const [activeTopics, setActiveTopics] = useState([location.state.active])
  const [renderArticles, setRenderArticles] = useState([])

  useEffect(() => {
    allArticles.forEach(article => {
      const articleTopics = article.node.topics.map(topic => topic.topicItem)
      let commonPart = articleTopics.filter(topic =>
        activeTopics.includes(topic)
      )

      if (commonPart.length !== 0) {
        if (!renderArticles.includes(article)) {
          setRenderArticles(prevState => [...prevState, article])
        }
      } else {
        setRenderArticles(prevState =>
          prevState.filter(item => item !== article)
        )
      }
    })
  }, [activeTopics])

  const addActiveTopics = topic => {
    if (activeTopics.indexOf(topic) === -1) {
      return setActiveTopics(prevState => [...prevState, topic])
    } else {
      const updateTopics = activeTopics.filter(item => item !== topic)
      return setActiveTopics(updateTopics)
    }
  }

  return (
    <NavigationLayout>
      <ContentWrapper>
        <Counter>{`${renderArticles.length}/${allArticles.length}`}</Counter>

        <TopicsWrapper>
          {topics.map(topic => (
            <TopicToggle
              key={topic.node.id}
              onClick={() => addActiveTopics(topic.node.topicItem)}
              active={activeTopics.includes(topic.node.topicItem)}
            >
              {topic.node.topicItem}
            </TopicToggle>
          ))}
        </TopicsWrapper>

        <ArticleWrapper>
          {renderArticles.map(article => (
            <ArticleItem
              key={article.node.id}
              title={article.node.title}
              topics={article.node.topics}
              image={article.node.image}
              activeTopics={activeTopics}
            />
          ))}
        </ArticleWrapper>
      </ContentWrapper>
    </NavigationLayout>
  )
}

export const query = graphql`
  query {
    allDatoCmsTopic {
      edges {
        node {
          topicItem
          id
        }
      }
    }

    allDatoCmsArticle {
      edges {
        node {
          id
          title
          topics {
            id
            topicItem
          }
          image {
            fixed(width: 450, height: 150) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
