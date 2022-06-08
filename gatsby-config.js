require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "GoTradie",
    titleTemplate: "We've got tradie chat sorted",
    description:
      "Simplify the way your team, subbies and worksites connect, communicate & collaborate in a purpose built messaging app",
    url: "https://www.gotradie.com.au", // No trailing slash allowed!
    image: "/static/meta-image.jpg", // Path to your image you placed in the 'static' folder
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
