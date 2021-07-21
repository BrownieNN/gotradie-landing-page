import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// export const query = graphql`
//   query($slug: String, $tag: [String!]) {
//     contentfulBrunchPost(slug: { eq: $slug }, tag: { in: $tag }) {
//       title
//       slug
//       tag
//     }
//   }
// `

const TagPosts = () => {
  const data = useStaticQuery(
    graphql`
      query($slug: String, $tag: String) {
        allContentfulBrunchPost(
          filter: { tag: { eq: $tag }, slug: { eq: $slug } }
        ) {
          edges {
            node {
              slug
              tag
              title
              id
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

export default TagPosts

// const TagPost = props => {
//   return (
//     <div>
//       <div className="content">
//         <h1>{props.data.contentfulBrunchPost.title}</h1>
//       </div>
//     </div>
//   )
// }
