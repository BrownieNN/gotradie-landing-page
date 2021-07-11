import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulLink {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <ul>
        {data.allContentfulLink.edges.map(edge => {
          return (
            <li>
              <h2>
                <a href={edge.node.url}>{edge.node.title}</a>
              </h2>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Footer

const Layout = styled.div``
