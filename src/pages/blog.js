import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBrunchPost(sort: { order: DESC, fields: contentful_id }) {
          edges {
            node {
              title
              id
              slug
              featuredImage {
                fluid {
                  src
                }
              }
              shortDescription {
                shortDescription
              }
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBrunchPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              {edge.node.featuredImage && (
                <Img
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.shortDescription.shortDescription}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Blog
