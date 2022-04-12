require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "GoTradie",
    titleTemplate: "Get back at it quicker",
    description:
      "With your teams, clients and subbies in one place – there’s no mess, no fuss and no wasted time Tradie chat Sorted",
    url: "https://www.gotradie.com.au", // No trailing slash allowed!
    image: "/static/images/meta/meta-image.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GoTradie",
        short_name: "GoTradie",
        start_url: "/",
        background_color: "#153549",
        theme_color: "#153549",
        display: "standalone",
        icon: "static/images/favicon/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  flags: {
    DEV_SSR: false,
  },
}
