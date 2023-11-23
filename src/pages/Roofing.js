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

function Roofers() {

    const seoProps = {
        title: "Simple Communication for Roofers 🏠",
        description: "Keep on top of your communication and media",
        imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-generic.png", // Use the absolute URL
        imageWidth: 1200, // Specify the image width
        imageHeight: 630, // Specify the image height
        url: "https://www.gotradie.com.au/Roofing",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>🏠 FOR ROOFERS</p>}
        title={<p style={{color: "white"}}>Keep on <br />top of your <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}>communication and media</span></p>}
        description="GoTradie streamlines communication and task management for Roofers, ensuring your projects are pitch-er perfect"
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Chats"
        title="Streamlined communication"
        description="Cut through the noise with GoTradie's Chat feature. One inbox, organized for teams, worksites, and clients. Enjoy greater context on job updates, findable media, flexible worksite chats, and premium to-do lists."
        phoneHero="/images/phones/Roofing/Roofing-inbox.png"
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
        title="Simple co-ordination the way you like it"
        description="Simplify task management with GoTradie's To-Do List and Task feature. Create lists, assign tasks, set deadlines, attach documents, and mark tasks complete."
        phoneHero="/images/phones/Roofing/Roofing-to-do.png"
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
        title="Pitch-er perfect photo management"
        description="With GoTradie, quickly find and capture important before & after photos. Streamline media management for swift access to critical media"
        phoneHero="/images/phones/Roofing/Roofing-clips.png"
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

export default Roofers
