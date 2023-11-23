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

function Electricians() {

    const seoProps = {
      title: "Simple Communication for Electricians ⚡",
      description: "Empower your electrical & solar business",
      imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-generic.png", // Use the absolute URL
      imageWidth: 1200, // Specify the image width
      imageHeight: 630, // Specify the image height
      url: "https://www.gotradie.com.au/Electricians",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>⚡ ELECTRICAL & SOLAR</p>}
        title={<p style={{color: "white"}}><span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}>Empower</span> your electrical & solar business</p>}
        description="Seamlessly convey technical instructions, ensure compliance, and gain instant access to critical documents. Take control of your day-to-day operations"
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Clips"
        title="Simplified media management"
        description="Capture safe practice effortlessly. Compliance photos, and safety protocols with your team, ensuring a safe job well done"
        phoneHero="/images/phones/Electrician/Electrician-clips.png"
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
        subtitle="WORKSITES"
        title="Clear communication, better results"
        description="Hold video chats for in-depth technical discussions. Clarify complex instructions, assess project progress, and ensure your team comprehends every detail without delay."
        phoneHero="/images/phones/Electrician/Electrician-chat.png"
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
        subtitle="To-do lists"
        title="Updates at your fingertips"
        description="From high-maintenance jobs to civil infrastructure projects, and stay in the loop with job updates and completions from the team. Ensuring you’ve got all the answer for clients"
        phoneHero="/images/phones/Electrician/Electrician-to-do.png"
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
        profile="/images/avatars/power-solar-group.png"
        title="Special mention to Power & Solar Group"
        subtitle="Images & screens provided by Power & Solar Group, proud member of GoTradie"
        buttonTitle="Check them out"
        buttonUrl="https://www.instagram.com/powerandsolargroup/"
      />
      <FaqSection />
      <FinalSection />
    </Layout>
  )
}

export default Electricians
