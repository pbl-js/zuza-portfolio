import React, { useState } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import NavigationLayout from "layouts/NavigationLayout"
import { ContentWrapper, TopicsWrapper } from "components/Portfolio.style.js"
import SectionNameHeader from "components/SectionNameHeader/SectionNameHeader"
import ArticleItem from "components/ArticleItem/ArticleItem"
import TopicToggle from "components/TopicToggle/TopicToggle"

const PortfolioPage = ({ data }) => {
  const articles = data.allDatoCmsArticle.edges
  const topics = data.allDatoCmsTopic.edges
  const [activeTopics, setActiveTopics] = useState([])

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
        <SectionNameHeader title="portfolio" />
        <Link to="/#contact">Dawaj</Link>

        {activeTopics.map(active => (
          <h4 key={active}>{active}</h4>
        ))}
        <h1>siema</h1>

        <TopicsWrapper>
          {topics.map(topic => (
            <TopicToggle
              key={topic.node.id}
              title={topic.node.topicItem}
              addActiveTopics={addActiveTopics}
            />
          ))}
        </TopicsWrapper>

        {articles.map(article => (
          <ArticleItem
            key={article.node.id}
            title={article.node.title}
            topics={article.node.topics}
            image={article.node.image}
            activeTopics={activeTopics}
          />
        ))}
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
            fixed(width: 125, height: 125) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
