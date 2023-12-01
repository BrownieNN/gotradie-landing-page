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

function ProjectManagement() {

    const seoProps = {
      title: "Simple Communication for Project Management 📋",
      description: "Powering day-to-day project execution",
      imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-project-generic.png", // Use the absolute URL
      imageWidth: 1200, // Specify the image width
      imageHeight: 630, // Specify the image height
      url: "https://www.gotradie.com.au/ProjectManagement",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>📋 FOR PROJECT MANAGERS</p>}
        title={<p style={{color: "white"}}><span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}>Powering day-to-day</span> project execution</p>}
        description="Empower your role as a project manager with GoTradie. Seamlessly connect on-site foremen and office-based project managers, achieve total transparency, and effortlessly manage tasks"
        animationImageOne="/images/shots/hero-shot1.png"
      />
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Chats"
        title="On-Site updates, effortless coordination"
        description="GoTradie facilitates seamless on-site updates, connecting project managers with foremen. Enjoy complete transparency and effortless coordination for precise project management"
        phoneHero="/images/phones/home-hero-features.png"
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
      <FeatureDetailRightLrg
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Webapp"
        title="See it all on the big screen"
        description="GoTradie offers a desktop application with all the mobile features. Say goodbye to unnecessary site visits—assign tasks, manage upcoming schedules, and stay in control from anywhere"
        phoneHero="/images/phones/webapp.png"
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
        title="Task assignment, project mastery"
        description="With GoTradie, project managers can easily assign tasks to workers and manage upcoming schedules with precision. Streamline your task management for project success"
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
      <FaqSection />
      <FinalSection />
    </Layout>
  )
}

export default ProjectManagement
