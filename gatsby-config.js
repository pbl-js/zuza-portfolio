require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Freelance journalist`,
    description: `I am a freelance journalist with an eye for systemic ties between politics, culture, and economy. I seek journalistic processes that move beyond the conventional to live up to the challenges of the 21st century.`,
    author: `Zuza Nazaruk`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        utils: path.join(__dirname, "src/utils"),
        context: path.join(__dirname, "src/context"),
        images: path.join(__dirname, "src/images"),
        layouts: path.join(__dirname, "src/layouts"),
        hooks: path.join(__dirname, "src/hooks"),
        icons: path.join(__dirname, "src/icons"),
        gen: path.join(__dirname, "src/gen"),
        functions: path.join(__dirname, "src/functions"),
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Khand`,
    //         subsets: ["latin"],
    //         variants: ["300", `400`, "500", "600", `700`],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Khand",
          "Khand:300",
          "Khand:400",
          "Khand:500",
          "Khand:600",
          "Khand:700",
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts/MainLayout.js`),
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
  ],
}
