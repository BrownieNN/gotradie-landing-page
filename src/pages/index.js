import React from "react"
import Layout from "../components/layout/layout"
import HeroSection from "../components/sections/HeroSection"
import AppSection from "../components/sections/AppSection"
import LogoSection from "../components/sections/LogoSection"
import HeroAnimation from "../components/sections/HeroAnimation"
import FeatureSection1 from "../components/sections/FeatureSection1"
import FeatureSection2 from "../components/sections/FeatureSection2"
import FeatureSection3 from "../components/sections/FeatureSection3"
import CenterAlignSection from "../components/sections/CenterAlignSection"
import VideoSection from "../components/sections/VideoSection"
import PricingTable from "../components/sections/PricingTable"
import SEO from "../components/layout/seo"
import TestimonialCarousel from "../components/sections/TestimonialSection"
import FeatureOverview from "../components/sections/FeatureOverview"
import HowItWorks from "../components/sections/HowItWorks"
import FinalSection from "../components/sections/FinalSection"
import PanelSection from "../components/sections/PanelSection"
import EnterpriseSection from "../components/sections/EnterpriseSection"

function IndexPage() {

  const seoProps = {
    title: "The Messenger App Built For Work 🔨",
    description: "Simplify the way your team, worksites and clients communicate & more.",
    imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta.png", // Use the absolute URL
    imageWidth: 1200, // Specify the image width
    imageHeight: 630, // Specify the image height
    url: "https://www.gotradie.com.au",
  };

  return (
    <Layout>
      <SEO {...seoProps} />
      <HeroSection />
      <VideoSection />
      <LogoSection />
      <FeatureOverview />
      <PanelSection />
      <TestimonialCarousel />
      <HowItWorks />
      <PricingTable />
      <EnterpriseSection />
      <FinalSection />
    </Layout>
  )
}

export default IndexPage
