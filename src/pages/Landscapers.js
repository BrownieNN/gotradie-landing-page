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

function Landscapers() {

    const seoProps = {
      title: "Simple Communication for Landscapers 🌳",
      description: "Communicate with your team, capture progress. Can you dig it?",
      imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-generic.png", // Use the absolute URL
      imageWidth: 1200, // Specify the image width
      imageHeight: 630, // Specify the image height
      url: "https://www.gotradie.com.au/Landscapers",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>🌳 FOR LANDSCAPERS</p>}
        title={<p style={{color: "white"}}>Communicate with your team, capture progress.<span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}> Can you dig it?</span></p>}
        description="Level up your landscaping business with GoTradie's seamless photo sharing. Effortlessly capture, share, and showcase projects for accurate quotes, quality assurance, and an impressive online portfolio."
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="CLIPS"
        title="No more digging through endless threads"
        description="Clips allow you to create organized photo folders. Showcase your landscaping projects effortlessly, impress clients, and perfect your online portfolio."
        phoneHero="/images/phones/Landscapers/Landscape-clips.png"
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
        subtitle="TO-DO LISTS"
        title="Ensure quality finishes to any projects"
        description="Add docs & media to tasks and projects. Ensure precise task assignment across multiple jobs, from design to completion, and guarantee top-quality finishes."
        phoneHero="/images/phones/Landscapers/Landscape-to-do.png"
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
        subtitle="Chats"
        title="The grass is greener with worksite chats"
        description="Coordinate with precision through Worksite Chats. Add team members & subbies, share progress updates, and keep home building projects on track in one dedicated space."
        phoneHero="/images/phones/Landscapers/Landscape-inbox.png"
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
        profile="/images/avatars/greenstone.png"
        title="Special mention to Greenstone Home & Garden"
        subtitle="Images & screens provided by Greenstone Home & Garden, proud member of GoTradie"
        buttonTitle="Check them out"
        buttonUrl="https://www.instagram.com/greenstonehomeandgardens/"
      />
      <FaqSection />
      <FinalSection />
    </Layout>
  )
}

export default Landscapers
