import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroTwoColumn from "../components/sections/HeroTwoColumn"
import AppSection from "../components/sections/AppSection"
import LogoSection from "../components/sections/LogoSection"
import FeatureSection1 from "../components/sections/FeatureSection1"
import FeatureSection2 from "../components/sections/FeatureSection2"
import FeatureSection3 from "../components/sections/FeatureSection3"
import FaqSection from "../components/sections/FaqSection"
import FeatureDetailLeft from "../components/sections/FeatureDetailLeft";
import FeatureDetailRight from "../components/sections/FeatureDetailRight";
import FinalSection from "../components/sections/FinalSection";

function Gardeners() {

    const seoProps = {
      title: "Simple Communication for Gardeners 🪴",
      description: "Easily keep & find all your photo's and info, safe & secure",
      imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-gardeners.png", // Use the absolute URL
      imageWidth: 1200, // Specify the image width
      imageHeight: 630, // Specify the image height
      url: "https://www.gotradie.com.au/Gardeners",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>🪴 FOR GARDENERS</p>}
        title={<p style={{color: "white"}}><span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}>Grow your garden business</span> with less</p>}
        description="Nurture your garden care business with GoTradie. Streamline quick jobs, prove your excellence with photos, safeguard your data, and bill clients swiftly."
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="To-do lists"
        title="Breathe easy with quick job delegation"
        description="GoTradie empowers gardening teams with rapid job delegation. Easily assign, record, and invoice quick garden tasks, ensuring efficient client billing"
        phoneHero="/images/phones/phone-tasks.png"
        // featureText="OUT OF THE BOX FEATURES"
        // subFeatureOne="Language translation "
        // subIconOne="/images/icons/translate.svg"
        // subFeatureTwo="Read receipts on messages"
        // subIconTwo="/images/icons/eye.svg"
        // subFeatureThree="Emoji reactions"
        // subIconThree="/images/icons/thumbs-up.svg"
        // subFeatureFour="Content privacy"
        // subIconFour="/images/icons/lock.svg"
      />
      <FeatureDetailRight
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Clips"
        title="Get the rub of the green"
        description="With GoTradie's Clips, effortlessly organize and share garden photos to clients. Prove your expertise and settle disputes with ease."
        phoneHero="/images/phones/phone-clips.png"
        // featureText="OUT OF THE BOX FEATURES"
        // subFeatureOne="Filter by assigned, team & more"
        // subIconOne="/images/icons/filter.svg"
        // subFeatureTwo="Add docs, photo’s & videos to tasks"
        // subIconTwo="/images/icons/gallery.svg"
        // subFeatureThree="Shuffle order of To-do list"
        // subIconThree="/images/icons/shuffle.svg"
        // subFeatureFour="Auto-save To-do lists"
        // subIconFour="/images/icons/valid.svg"
      />
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Privacy"
        title="Don’t let anyone cut your grass"
        description="GoTradie provides a secure data, safeguarding your pricing Rest easy knowing your sensitive information is protected against people knowing the ins and outs of your business."
        phoneHero="/images/phones/phone-privacy.png"
        // featureText="OUT OF THE BOX FEATURES"
        // subFeatureOne="Language translation "
        // subIconOne="/images/icons/translate.svg"
        // subFeatureTwo="Read receipts on messages"
        // subIconTwo="/images/icons/eye.svg"
        // subFeatureThree="Emoji reactions"
        // subIconThree="/images/icons/thumbs-up.svg"
        // subFeatureFour="Content privacy"
        // subIconFour="/images/icons/lock.svg"
      />
      <FaqSection />
      <FinalSection />
    </Layout>
  )
}

export default Gardeners
