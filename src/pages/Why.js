
import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroOneColumn from "../components/sections/HeroOneColumn"
import HeroAnimation from "../components/sections/HeroAnimation"
import FaqSection from "../components/sections/FaqSection"
import FeatureDetailLeft from "../components/sections/FeatureDetailLeft";
import FeatureDetailRight from "../components/sections/FeatureDetailRight";
import FinalSection from "../components/sections/FinalSection";
import GifSection from "../components/sections/GifSection"
import PlainText from "../components/sections/PlainText"

function Why() {

    const seoProps = {
      title: "Simple Communication for Electricians ⚡",
      description: "Empower your team better with comms & info in one place",
      imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-electricians.png", // Use the absolute URL
      imageWidth: 1200, // Specify the image width
      imageHeight: 630, // Specify the image height
      url: "https://www.gotradie.com.au/why",
      };
      
  return (
    <Layout>
    <SEO {...seoProps} />
      <HeroOneColumn
        subtitle={<p style={{color: "#54C5C0"}}>2 min Read</p>}
        title={<p style={{color: "white"}}>Why businesses should ditch<span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}> SMS, Email, WhatsApp and Messenger</span></p>}
        description="In today's fast-paced construction and trade industries, efficient communication is the cornerstone of success. Yet, many businesses continue to rely on traditional methods like SMS, WhatsApp, and Messenger, inadvertently holding themselves back from reaching their full potential."
      />
      <HeroAnimation />
      <FeatureDetailLeft
        title="Fragmented Conversations vs. Unified Communication"
        description=
        {
          <p>
          <p style={{paddingBottom: "16px"}}>The challenge with SMS, WhatsApp, and Messenger is the fragmentation of conversations. In a bustling construction site, conversations are scattered across different groups and individuals, making it difficult to maintain context and clarity.</p>
          <p style={{color: "#54C5C0", fontWeight: "700", fontSize: "18px", paddingBottom: "16px"}}>A Unified Communication Hub</p>
          <p>GoTradie centralizes all your project-related conversations, providing a dedicated platform for team discussions, client interactions, and partner communications. Say goodbye to the confusion of fragmented conversations and ensure everyone is on the same page.</p>
        </p>
        }
        phoneHero="/images/phones/home-hero-features.png"
      />
      <GifSection
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        gifImage="/images/gifs/lost.gif"
        caption="“Yeh it’s on my phone somewhere i think”"
      />
      <FeatureDetailLeft
        title="Media Chaos vs. Effortless Media Management"
        description=
        {
          <p>
          <p style={{paddingBottom: "16px"}}>Locating essential project media like photos, videos, and documents can be a headache when they're buried within chat threads. This inefficiency affects your ability to showcase your work to clients and partners effectively.</p>
          <p style={{color: "#54C5C0", fontWeight: "700", fontSize: "18px", paddingBottom: "16px"}}>No more lost photos</p>
          <p>With GoTradie, media management is a breeze. Categorize and access project photos and documents with a few clicks. Impress clients by presenting your work impeccably, thanks to an organized and accessible media library.</p>
          </p>
        }
        phoneHero="/images/phones/phone-clips.png"
      />
      <GifSection
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        gifImage="/images/gifs/building-plans.gif"
        caption="“I sent you the plan, you sweet with what we discussed”"
      />
       <FeatureDetailLeft
        title="Task Tracking Woes vs. Task Mastery and Quality Assurance"
        description=
        {
          <p>
          <p style={{paddingBottom: "16px"}}>Assigning tasks, setting deadlines, and tracking progress on traditional platforms don’t feed through to the likes of SMS and WhatsApp. Causing delays and reworks costing businesses </p>
          <p style={{color: "#54C5C0", fontWeight: "700", fontSize: "18px", paddingBottom: "16px"}}>Task Assignment and Quality Assurance</p>
          <p>GoTradie simplifies task management. Assign tasks, set deadlines, and track their progress without annoying them come pack up time. Giving your team greater accountability </p>
          </p>
        }
        phoneHero="/images/phones/phone-tasks.png"
      />
      <GifSection
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        gifImage="/images/gifs/privacy.gif"
        caption="“He took off with all my pricing list & setup his own business”"
      />
      <FeatureDetailLeft
        title="Privacy and Data Security vs. Peace of Mind"
        description=
        {
          <p>
          <p style={{paddingBottom: "16px"}}>Using personal messaging apps like WhatsApp and Messenger for business purposes can raise concerns about privacy and data security. Sensitive project information might not be adequately protected.</p>
          <p style={{color: "#54C5C0", fontWeight: "700", fontSize: "18px", paddingBottom: "16px"}}>We’ve got you covered</p>
          <p>GoTradie prioritizes your data's security and privacy. Enjoy peace of mind knowing that your project information is protected by robust security measures, preserving business info confidentiality and ensuring data integrity.</p>
          </p>
        }
        phoneHero="/images/phones/phone-privacy.png"
      />
      <GifSection
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        gifImage="/images/gifs/sausage-throw.gif"
        caption="“The plumber, sparky’s want to know about the bathroom specs”"
      />
      <FeatureDetailLeft
        title="Limited Growth vs. Collaboration and Growth"
        description=
        {
          <p>
          <p style={{paddingBottom: "16px"}}>Traditional communication methods can hinder your business's growth potential. Collaborating with team members, clients, and subbies becomes challenging, limiting your ability to work on the business rather than in the business</p>
          <p style={{color: "#54C5C0", fontWeight: "700", fontSize: "18px", paddingBottom: "16px"}}>More growth and profressionalism</p>
          <p>GoTradie facilitates seamless collaboration with your team, clients, and partners. As you provide superior services and showcase your craftsmanship more effectively, your business will experience accelerated growth.</p>
          </p>
        }
        phoneHero="/images/phones/phone-worksites.png"
      />
       <PlainText
        title="Conclusion"
        description={
          <p>
          <p style={{paddingBottom: "16px"}}>In the construction and trade industries, the decision to move away from traditional communication methods like SMS, WhatsApp, and Messenger to GoTradie is a game-changer. Addressing the concerns of fragmented conversations, media mismanagement, task tracking troubles, privacy and data security, and limited growth, GoTradie offers a unified platform that streamlines your operations, enhances communication, and drives your business forward.</p>
          <p>Don't let outdated communication methods hold you back from achieving your full potential. Embrace the future of trade and construction communication with GoTradie and elevate your business to new heights. Make the switch today and experience the power of streamlined, efficient, and organized communication.</p>
          </p>
        }
      />
      <FinalSection />
    </Layout>
  )
}

export default Why
