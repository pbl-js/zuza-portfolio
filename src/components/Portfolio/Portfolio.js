import React, { useContext } from "react"
import Link from "gatsby-link"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "styled-components"
import { ActiveTopicsContext } from "context/ActiveTopicsContext"

import SectionWrapper from "components/SectionWrapper/SectionWrapper"
import { CategoryItem, MotionLink, StyledArrow } from "./Portfolio.style"

const Portfolio = ({ color, forwardRef, id, theme }) => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allDatoCmsTopic {
        edges {
          node {
            topicItem
            id
          }
        }
      }
    }
  `)

  const themeContext = useContext(ThemeContext)
  const { setActiveTopics } = useContext(ActiveTopicsContext)

  const containerVariants = {
    hover: {},
  }

  const linkVariants = {
    hover: {
      letterSpacing: "10px",
      color: themeContext.dark,
      transition: { duration: 0.2 },
    },
  }

  const logoVariants = {
    hover: {
      opacity: 1,
    },
    noHover: {
      opacity: 0,
    },
  }

  return (
    <SectionWrapper id={id} color={color} forwardRef={forwardRef}>
      {data.allDatoCmsTopic.edges.map(category => (
        <Link
          to="/portfolio"
          key={category.node.id}
          style={{ textDecoration: "none", width: "100%" }}
          onClick={() => setActiveTopics([category.node.topicItem])}
        >
          <CategoryItem whileHover="hover" variants={containerVariants}>
            <MotionLink variants={linkVariants}>
              {category.node.topicItem}
            </MotionLink>

            <motion.span variants={logoVariants} initial="noHover">
              <StyledArrow />
            </motion.span>
          </CategoryItem>
        </Link>
      ))}
    </SectionWrapper>
  )
}

export default Portfolio
