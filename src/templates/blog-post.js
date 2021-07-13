import React from "react"
import { graphql, Link } from "gatsby"

import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    contentfulBrunchPost(slug: { eq: $slug }) {
      title
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      image1 {
        fluid(maxWidth: 200) {
          ...GatsbyContentfulFluid
        }
      }
      image2 {
        fluid(maxWidth: 200) {
          ...GatsbyContentfulFluid
        }
      }
      image3 {
        fluid(maxWidth: 200) {
          ...GatsbyContentfulFluid
        }
      }
      image4 {
        fluid(maxWidth: 200) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
    }
  }
`

const BlogPost = props => {
  return (
    <div>
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBrunchPost.title}</h1>
        {props.data.contentfulBrunchPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBrunchPost.featuredImage.fluid}
            alt={props.data.contentfulBrunchPost.title}
          />
        )}
        {props.data.contentfulBrunchPost.image1 && (
          <Img
            className="featured"
            fluid={props.data.contentfulBrunchPost.image1.fluid}
            alt={props.data.contentfulBrunchPost.title}
          />
        )}
        {props.data.contentfulBrunchPost.image1 && (
          <Img
            className="featured"
            fluid={props.data.contentfulBrunchPost.image2.fluid}
            alt={props.data.contentfulBrunchPost.title}
          />
        )}
        {props.data.contentfulBrunchPost.image1 && (
          <Img
            className="featured"
            fluid={props.data.contentfulBrunchPost.image3.fluid}
            alt={props.data.contentfulBrunchPost.title}
          />
        )}
        {props.data.contentfulBrunchPost.image1 && (
          <Img
            className="featured"
            fluid={props.data.contentfulBrunchPost.image4.fluid}
            alt={props.data.contentfulBrunchPost.title}
          />
        )}
        <p>{props.data.contentfulBrunchPost.description.description}</p>
      </div>
    </div>
  )
}

export default BlogPost
