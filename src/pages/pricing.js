import React from "react"
import Layout from "../components/layout/layout"
import PricingTable from "../components/sections/PricingTable"
import HeroTwoColumn from "../components/sections/HeroTwoColumn"
import AppSection from "../components/sections/AppSection"
import FaqSection from "../components/sections/FaqSection"

function Landscapers() {
  return (
    <Layout>
      <PricingTable />
      <FaqSection />
      <AppSection />
    </Layout>
  )
}

export default Landscapers
