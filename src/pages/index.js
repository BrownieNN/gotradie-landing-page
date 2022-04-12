import React from "react"
import Layout from "../components/layout/layout"
import SearchEngine from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import AppSection from "../components/sections/AppSection"
import Footer from "../components/layout/footer"
import LogoSection from "../components/sections/LogoSection"

function IndexPage() {
  return (
    <Layout>
      <SearchEngine title="Tradie Messenger" />
      <HeroSection />
      <LogoSection />
      <AppSection />
      <Footer />
    </Layout>
  )
}

export default IndexPage
