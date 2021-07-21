import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SearchEngine from "../components/layout/seo"

function SecondPage() {
  return (
    <Layout>
      <SearchEngine title="Page two" />
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="logo" />
      </Link>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
