import React, { useState, useEffect, useContext } from "react"
import { graphql } from "gatsby"
import SEO from "components/seo"
import setTheme from "functions/setTheme"

import { ActiveTopicsContext } from "context/ActiveTopicsContext"

import NavigationLayout from "layouts/NavigationLayout"
import {
  ContentWrapper,
  ArticleWrapper,
  Counter,
  TopicsWrapper,
  TopicToggle,
} from "components/Portfolio.style.js"
import ArticleItem from "components/ArticleItem/ArticleItem"

const PortfolioPage = ({ data }) => {
  const visableArticles = data.allDatoCmsArticle.edges.filter(
    article => !article.node.hide
  )
  const topics = data.allDatoCmsTopic.edges
  const { activeTopics, addActiveTopics } = useContext(ActiveTopicsContext)
  const [renderArticles, setRenderArticles] = useState([])

  useEffect(() => {
    visableArticles.forEach(article => {
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

  setTheme("primary")

  return (
    <NavigationLayout>
      <SEO title="Portfolio" />
      <ContentWrapper>
        <Counter>{`${renderArticles.length}/${visableArticles.length}`}</Counter>

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
          {renderArticles.map(article => {
            return article.node.hide ? null : (
              <ArticleItem
                key={article.node.id}
                title={article.node.title}
                topics={article.node.topics}
                image={article.node.image}
                activeTopics={activeTopics}
              />
            )
          })}
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
          hide
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
