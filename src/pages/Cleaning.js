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
import PanelSection from "../components/sections/PanelSection"

function Cleaners() {

    const seoProps = {
      title: "Simple Communication for Cleaning 🧹 ",
      description: "Keep your your communication & photos tidy",
      imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-generic.png", // Use the absolute URL
      imageWidth: 1200, // Specify the image width
      imageHeight: 630, // Specify the image height
      url: "https://www.gotradie.com.au/Cleaning",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>🧹 FOR CLEANERS</p>}
        title={<p style={{color: "white"}}>Keep your your <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}> communication & photos tidy</span></p>}
        description="GoTradie empowers cleaning businesses with simplified job delegation, easy record-keeping, and chat translation."
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="To-do lists"
        title="Swift delegation, speedy results"
        description="GoTradie enables fast & easy job delegation. Assign, record, and invoice quick tasks effortlessly, ensuring efficient operations and prompt client billing."
        phoneHero="/images/phones/Cleaning/Cleaning-to-do.png"
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
        subtitle="Chats"
        title="Don't get lost in translation"
        description="Have a diverse team? GoTradie provides translation option for your workforce so you can effectively communicate in any language"
        phoneHero="/images/phones/Cleaning/Cleaning-chat.png"
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
        subtitle="Clips"
        title="Proving excellence, one photo at a time"
        description="With GoTradie's Clips, easily organize and forward job photos to clients for disputes or as a testament to your quality service."
        phoneHero="/images/phones/Cleaning/Cleaning-clips.png"
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
       <PanelSection 
        profile="/images/avatars/pharo-cleaning.png"
        title="Special mention to Pharo Cleaning"
        subtitle="Images & screens provided by Pharo Cleaning, proud member of GoTradie"
        buttonTitle="Check them out"
        buttonUrl="https://www.instagram.com/lou.projects/"
      />
      <FaqSection />
      <FinalSection />
    </Layout>
  )
}

export default Cleaners
