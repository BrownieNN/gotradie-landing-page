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
      title: "Simple Communication for Suppliers 📦",
      description: "Build better trade communication",
      imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-generic.png", // Use the absolute URL
      imageWidth: 1200, // Specify the image width
      imageHeight: 630, // Specify the image height
      url: "https://www.gotradie.com.au/Supplier",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>📦 FOR SUPPLIERS</p>}
        title={<p style={{color: "white"}}>Deliver better <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}>supplier communication</span></p>}
        description="Empower your sales teams with GoTradie. Connect on-site foremen and project managers seamlessly, ensure material is delivered, and protect your data"
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailRightLrg
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Webapp"
        title="Build better account management"
        description="GoTradie offers seamless on-site updates, connecting foremen & project managers. Achieve complete transparency on-site and streamline communication effortlessly"
        phoneHero="/images/phones/Supplier/supplier-webapp.png"
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
        subtitle="Privacy"
        title="Own your supplier business data"
        description="GoTradie provides a secure data, safeguarding your pricing. Rest easy knowing your sensitive information is protected against people knowing the ins and outs of your business"
        phoneHero="/images/phones/Supplier/supplier-chat.png"
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
        title="Be top of mind for your trade accounts"
        description="With GoTradie worksite chats, you'll be a few taps away from any enquiries so your sales team can stay in touch and build better relationships with accounts"
        phoneHero="/images/phones/Supplier/supplier-inbox.png"
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
