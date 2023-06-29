import React from "react"
import Layout from "../components/layout/layout"
import HeroSection from "../components/sections/HeroSection"
import AppSection from "../components/sections/AppSection"
import Footer from "../components/layout/footer"
import LogoSection from "../components/sections/LogoSection"
import HeroAnimation from "../components/sections/HeroAnimation"
import FeatureSection1 from "../components/sections/FeatureSection1"
import FeatureSection2 from "../components/sections/FeatureSection2"
import FeatureSection3 from "../components/sections/FeatureSection3"
import CenterAlignSection from "../components/sections/CenterAlignSection"
import VideoSection from "../components/sections/VideoSection"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO />
      <HeroSection />
      <VideoSection />
      <LogoSection />
      <HeroAnimation />
      <FeatureSection1
        subtitle="Helping you keep it together"
        title={<p style={{color: "white"}}>All your work <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}> messages, photos, videos, docs and more</span></p>}
        tagTitleOne="Chat to your team"
        tagTitleTwo="Photos & videos"
        tagTitleThree="Organised inbox"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/gallery.svg"
        iconThree="/images/icons/transfer.svg"
        description="Seperate your work & private life. Simplifying the way you co-ordinate your worksites, team, subbies and clients."
        animationImageOne="/images/shots/hero-shot1.png"
        animationImageTwo="/images/animations/inbox.png"
      />
      <FeatureSection2 
        subtitle="In need of an extra pair of hands?"
        title={<p style={{color: "white"}}>Bringing <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}> businesses, worksites and wider trade community together</span></p>}
        tagTitleOne="Subbies"
        tagTitleTwo="Network"
        tagTitleThree="Connect"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/search.svg"
        iconThree="/images/icons/conversation.svg"
        description="Jump on and search for a subbie, apprentice, new employee or simply connect with other likeminded tradies & businesses who have joined the GoTradie community."
        animationImageOne="/images/shots/hero-shot4.png"
        animationImageTwo="/images/animations/notification.svg"
        animationImageThree="/images/animations/search-field.svg"
        animationImageFive="/images/animations/chats.png"
      />
      <FeatureSection3
        subtitle="Easily collaborate and get more done"
        title={<p style={{color: "white"}}>Bridging the gap between <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}> site & office and everyone in between</span></p>}
        tagTitleOne="Collaborate"
        tagTitleTwo="Message"
        tagTitleThree="Manage team"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/conversation.svg"
        iconThree="/images/icons/add-person.svg"
        description="No more waiting to get home or back to the office. Share & receive content on GoTradie across your mobile, tablet and desktop devices"
        animationImageOne="/images/shots/hero-shot-latop.png"
        animationImageTwo="/images/shots/mobile-inbox.png"
        animationImageThree="/images/animations/office-chat.png"
        animationImageFour="/images/animations/notifications.png"
      />
     <FeatureSection2 
        subtitle="Safe as houses"
        title={<p style={{color: "white"}}>Find what you need, <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}> when you need it</span></p>}
        tagTitleOne="Search"
        tagTitleTwo="Find"
        tagTitleThree="Secure"
        iconOne="/images/icons/Search.svg"
        iconTwo="/images/icons/gallery.svg"
        iconThree="/images/icons/lock.svg"
        description="Lost your phone or failed to back it up? Our powerful search and cloud encrypted data hosting (technical mumbo jumbo) ensures you’ll never lose critical information again. 
        "
        animationImageOne="/images/shots/hero-shot5.png"
        animationImageTwo="/images/animations/search-bar.png"
        animationImageThree="/images/animations/results.png"
        animationImageFive="/images/animations/message-results.png"
      />
      <CenterAlignSection />
      <AppSection />
    </Layout>
  )
}

export default IndexPage
