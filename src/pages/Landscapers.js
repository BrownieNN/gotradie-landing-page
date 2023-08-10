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

function Landscapers() {

  const seoProps = {
    title: "Simple Communication for Landscapers 🌳",
    description: "Unlock your teams potential & do more with less",
    imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-landscapers.png", // Use the absolute URL
    imageWidth: 1200, // Specify the image width
    imageHeight: 630, // Specify the image height
    url: "https://www.gotradie.com.au/Landscapers",
  };

  return (
    <Layout>
      <SEO {...seoProps} />
      <HeroTwoColumn
        subtitle={<p style={{color: "#54C5C0"}}>🌳 FOR LANDSCAPERS</p>}
        title={<p style={{color: "white"}}>Your team communication <span style={{background: "linear-gradient(90deg, #54C5C0 0%, #789BB6 100%)",  backgroundClip:"text", WebkitBackgroundClip: "text",  WebkitTextFillColor: "transparent", color: "transparent" }}>the way you like it</span></p>}
        description="Wrangle your team with seamless communication, capture photo, videos, docos and more all in one place"
        animationImageOne="/images/shots/hero-shot1.png"
        animationImageTwo="/images/animations/inbox.png"
      />
      <LogoSection
        title="in good company"
      />
      <FeatureSection1
        subtitle="No nonsense communication"
        title="Seamlessly Connect and Communicate with Your Team"
        tagTitleOne="Chat to your team"
        tagTitleTwo="Photos & videos"
        tagTitleThree="Organised inbox"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/gallery.svg"
        iconThree="/images/icons/transfer.svg"
        description="Streamline collaboration and boost productivity by messaging your team effortlessly on our dedicated landscaping messaging platform."
        animationImageOne="/images/shots/hero-shot1.png"
        animationImageTwo="/images/animations/inbox.png"
      />
      <FeatureSection2 
        subtitle="Unlimited storage"
        title="Capture Your Outdoor Masterpieces in One Place"
        tagTitleOne="Subbies"
        tagTitleTwo="Network"
        tagTitleThree="Connect"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/search.svg"
        iconThree="/images/icons/conversation.svg"
        description="Store and showcase your stunning before & after photos and videos in a single, visually captivating hub. A treasure trove of your hard yakka"
        animationImageOne="/images/shots/hero-shot4.png"
        animationImageTwo="/images/animations/notification.svg"
        animationImageThree="/images/animations/search-field.svg"
        animationImageFive="/images/animations/chats.png"
      />
      <FeatureSection3
        subtitle="Organise & showcase"
        title="Transform Chaos into Picture-Perfect Order with Effortless Photo Organization"
        tagTitleOne="Collaborate"
        tagTitleTwo="Message"
        tagTitleThree="Manage team"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/conversation.svg"
        iconThree="/images/icons/add-person.svg"
        description="Say goodbye to endless scrolling! Easily create folders using clips, bringing harmony to your photo storsge. Find what you need in a snap."
        animationImageOne="/images/shots/hero-shot-latop.png"
        animationImageTwo="/images/shots/mobile-inbox.png"
        animationImageThree="/images/animations/office-chat.png"
        animationImageFour="/images/animations/notifications.png"
      />
      <FaqSection />
      <AppSection />
    </Layout>
  )
}

export default Landscapers
