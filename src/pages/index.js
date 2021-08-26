import React from "react"
import Layout from "../components/layout/layout"
import SearchEngine from "../components/layout/seo"
import ScrollIndicator from "../components/scroll/Scroll"
import FeatureSectionOne from "../components/sections/FeatureSection1"
import HeroAnimation from "../components/sections/HeroAnimation"
import HeroSection from "../components/sections/HeroSection"
import FeatureSectionTwo from "../components/sections/FeatureSection2"
import CenterAlignSection from "../components/sections/CenterAlignSection"
import GallerySection from "../components/sections/GallerySection"
import PanelSection from "../components/sections/PanelSection"
import AppSection from "../components/sections/AppSection"
import Footer from "../components/layout/footer"

function IndexPage() {
  return (
    <Layout>
      <SearchEngine title="Home" />
      <HeroSection />
      <ScrollIndicator />
      <HeroAnimation id="why" />
      <FeatureSectionOne
        id="features"
        subtitle="No-nonsense communication"
        title="Keep it together"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/conversation.svg"
        iconThree="/images/icons/transfer.svg"
        tagTitleOne="Team chats"
        tagTitleTwo="Worksite chats"
        tagTitleThree="Clients"
        description="Take back your phone. Chat to clients, tradies and your team through one easy-to-use inbox."
        animationImageOne="/images/shots/hero-shot1.png"
        animationImageTwo="/images/animations/inbox.svg"
      />
      <FeatureSectionTwo
        subtitle="Get noticed when you’re not online"
        title="Let your profile do the talking"
        iconOne="/images/icons/web-address.svg"
        iconTwo="/images/icons/send.svg"
        iconThree="/images/icons/pencil.svg"
        tagTitleOne="Professional"
        tagTitleTwo="Share"
        tagTitleThree="Customise"
        description="Put away the fridge magnet budget. Promote your business with a top-notch profile, generated automatically with your GoTradie account"
        animationImageOne="/images/shots/hero-shot3.png"
        animationImageTwo="/images/animations/services.svg"
        animationImageThree="/images/animations/calendar.svg"
        animationImageFour="/images/animations/service-area.svg"
        animationImageFive="/images/animations/licence.svg"
      />
      <FeatureSectionOne
        subtitle="Subbie search made easy"
        title="Find the right subbie"
        iconOne="/images/icons/search.svg"
        iconTwo="/images/icons/filter.svg"
        tagTitleOne="Search"
        tagTitleTwo="Filter by service"
        tagTitleThree="Multi message"
        description="Need an extra hand? Too easy. Find Chippies, Sparkies, Steel fabricators and more with our subbie search feature"
        animationImageOne="/images/shots/hero-shot4.png"
        animationImageTwo="/images/animations/search-field.svg"
      />
      <FeatureSectionTwo
        subtitle="Bring the team together"
        title="Everyone under the same roof"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/chat.svg"
        iconThree="/images/icons/conversation.svg"
        tagTitleOne="Invite your team"
        tagTitleTwo="Messages"
        tagTitleThree="Team group chats"
        description="Save the heavy lifting for the job site. Easily organise your team and manage multiple projects all in one place"
        animationImageOne="/images/shots/hero-shot5.png"
        animationImageTwo="/images/animations/notification.svg"
        animationImageThree="/images/animations/chat.svg"
        animationImageFive="/images/animations/members.svg"
      />
      <CenterAlignSection id="industries" />
      <GallerySection />
      <PanelSection />
      <AppSection />
      <Footer />
    </Layout>
  )
}

export default IndexPage
