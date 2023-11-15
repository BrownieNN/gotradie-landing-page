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
import FeatureDetailRightLrg from "../components/sections/FeatureDetailRightLrg";
import FinalSection from "../components/sections/FinalSection";

function Construction() {

    const seoProps = {
      title: "Simple Communication for Construction 🏗️",
      description: "Better transparency, effeciency & productivity every working day",
      imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-construction.png", // Use the absolute URL
      imageWidth: 1200, // Specify the image width
      imageHeight: 630, // Specify the image height
      url: "https://www.gotradie.com.au/Construction",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>🏗️ FOR CONSTRUCTION</p>}
        title={<p style={{color: "white"}}>Build <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}>better team collaboration</span></p>}
        description="Empower your construction company with GoTradie. Connect on-site foremen and project managers seamlessly, ensure subcontractor transparency, and protect your data."
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailRightLrg
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Webapp"
        title="Day-to-Day updates, total transparency"
        description="GoTradie offers seamless on-site updates, connecting foremen & project managers. Achieve complete transparency on-site and streamline communication effortlessly."
        phoneHero="/images/phones/webapp.png"
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
       <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Clips"
        title="Your construction data, your Fortification"
        description="GoTradie provides a secure data, safeguarding your pricing Rest easy knowing your sensitive information is protected against people knowing the ins and outs of your business."
        phoneHero="/images/phones/phone-clips.png"
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
        subtitle="Worksites"
        title="Unify subcontractor communications"
        description="With GoTradie worksite chats, unify subcontractor communications. No more individual updates—keep all businesses in the loop and enhance collaboration for smoother construction operations."
        phoneHero="/images/phones/phone-worksites.png"
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
      <FaqSection />
      <FinalSection />
    </Layout>
  )
}

export default Construction
