/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBrunchPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBrunchPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  const tag = await graphql(`
    query {
      allContentfulBrunchPost {
        edges {
          node {
            tag
            slug
            id
          }
        }
      }
    }
  `)

  tag.data.allContentfulBrunchPost.edges.forEach(edge => {
    let slugifiedTag = edge.node.tag
      .toString()
      .toLowerCase()
      .replace("/^s+$/g", "-")

    createPage({
      path: `/tag/${slugifiedTag}`,
      component: path.resolve("./src/templates/tag-post.js"), // your tagComponent
      context: {
        slug: edge.node.slug,
        tag: edge.node.tag,
      },
    })
  })
}
