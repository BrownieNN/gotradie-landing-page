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

function Carpenter() {

    const seoProps = {
        title: "Simple Communication for Carpenters 🪚",
        description: "Work communication you can truss",
        imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-generic.png", // Use the absolute URL
        imageWidth: 1200, // Specify the image width
        imageHeight: 630, // Specify the image height
        url: "https://www.gotradie.com.au/Carpenters",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>🪚 FOR CARPENTER</p>}
        title={<p style={{color: "white"}}>Work communication<span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}> you can truss</span></p>}
        description="GoTradie streamlines communication and task management for Caprenters, ensuring your projects run smoothly from foundation to finish"
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="TO-DO LISTS"
        title="Keep the team accountable"
        description="Stay on top of every home project with tailored to-do lists. Assign tasks, set deadlines, and track progress effortlessly, ensuring every detail is covered"
        phoneHero="/images/phones/Carpenter/Carpenter-to-do.png"
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
        subtitle="CLIPS"
        title="Capture & document every stage of the build "
        description="Bring your plans to life with Clips. Create photo folders to provide context, differentiate similar spaces, and collaborate seamlessly with your team and subbies"
        phoneHero="/images/phones/Carpenter/Carpenter-clips.png"
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
        subtitle="Worksites"
        title="Efficient worksite communication"
        description="Co-ordinate with precision through Worksite Chats. Add team members & subbies, share progress updates, and keep home building projects on track in one dedicated space"
        phoneHero="/images/phones/Carpenter/Carpenter-inbox.png"
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
        profile="/images/avatars/onshore-homes.png"
        title="Special mention to Onshore Homes"
        subtitle="Images & screens provided by Onshore Homes, proud member of GoTradie"
        buttonTitle="Check them out"
        buttonUrl="https://www.instagram.com/onshorehomes/"
      />
      <FaqSection />
      <FinalSection />
    </Layout>
  )
}

export default Carpenter
