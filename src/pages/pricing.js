import React from "react"
import Layout from "../components/layout/layout"
import PricingTable from "../components/sections/PricingTable"
import AppSection from "../components/sections/AppSection"
import FaqSection from "../components/sections/FaqSection"
import SEO from "../components/layout/seo"

function Landscapers() {

  const seoProps = {
    title: "A fair Price for all businesses",
    description: "No nonense pricing, start for free no credit card needed",
    imageUrl: "https://www.gotradie.com.au/static/images/Website-meta.png", // Use the absolute URL
    imageWidth: 1200, // Specify the image width
    imageHeight: 630, // Specify the image height
    url: "https://www.gotradie.com.au/pricing",
  };

  return (
    <Layout>
      <SEO {...seoProps} />
      <PricingTable />
      <FaqSection />
      <AppSection />
    </Layout>
  )
}

export default Landscapers
