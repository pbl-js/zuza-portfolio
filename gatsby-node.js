const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/gen/Article/Article.js`)

  const result = await graphql(`
    query queryArticles {
      allDatoCmsArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  console.log(result)

  result.data.allDatoCmsArticle.edges.forEach(article => {
    const slug = slugify(article.node.title, { lower: true })

    createPage({
      path: `/portfolio/${slug}`,
      component: articleTemplate,
      context: {
        articleId: article.node.id,
      },
    })
  })
}
