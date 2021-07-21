import React from "react"
import Layout from "../components/layout/layout"
import SearchEngine from "../components/layout/seo"
import ScrollIndicator from "../components/scroll/Scroll"
import HeroAnimation from "../components/sections/HeroAnimation"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <SearchEngine title="Home" />
      <HeroSection />
      <ScrollIndicator />
      <HeroAnimation />
    </Layout>
  )
}

export default IndexPage
