import React from "react"
import Layout from "../components/layout/layout"
import SearchEngine from "../components/layout/seo"
import ScrollIndicator from "../components/scroll/Scroll"
import FeatureSectionOne from "../components/sections/FeatureSection1"
import HeroAnimation from "../components/sections/HeroAnimation"
import HeroSection from "../components/sections/HeroSection"
import FeatureSectionTwo from "../components/sections/FeatureSection2"
import CenterAlignSection from "../components/sections/CenterAlignSection"
import Carousel, { CarouselItem } from "../components/carousel/Carousel"

function IndexPage() {
  return (
    <Layout>
      <SearchEngine title="Home" />
      <HeroSection />
      <ScrollIndicator />
      <HeroAnimation />
      <FeatureSectionOne
        subtitle="No nonense communication"
        title="Messages all in one place"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/conversation.svg"
        iconThree="/images/icons/transfer.svg"
        tagTitleOne="Invite your team"
        tagTitleTwo="Messages"
        tagTitleThree="Auto Organised inbox"
        description="No need for mutliple apps. We made it easy to chat to your team,client & tradies in one place"
        animationImageOne="/images/shots/hero-shot1.png"
        animationImageTwo="/images/animations/inbox.svg"
      />
      <FeatureSectionTwo
        subtitle="Get online while being offline"
        title="Let your profile do the talking"
        iconOne="/images/icons/web-address.svg"
        iconTwo="/images/icons/send.svg"
        iconThree="/images/icons/pencil.svg"
        tagTitleOne="Online Profile"
        tagTitleTwo="Shareable off-app"
        tagTitleThree="Updateable"
        description="With a GoTradie account setup we generate a profile that looks top-shelf. Let your profile do the heavy lifting when trying to win clients"
        animationImageOne="/images/shots/hero-shot3.png"
        animationImageTwo="/images/animations/services.svg"
        animationImageThree="/images/animations/calendar.svg"
        animationImageFour="/images/animations/service-area.svg"
        animationImageFive="/images/animations/licence.svg"
      />
      <FeatureSectionOne
        subtitle="Searching for help"
        title="Everyone under the same roof"
        iconOne="/images/icons/search.svg"
        iconTwo="/images/icons/filter.svg"
        tagTitleOne="Search"
        tagTitleTwo="Filter by service"
        tagTitleThree="Multi message"
        description="Specialised search that can help you find the right tradies for the job.  From Chippies to Steel fabricators you’ll find on our search"
        animationImageOne="/images/shots/hero-shot4.png"
        animationImageTwo="/images/animations/search-field.svg"
      />
      <FeatureSectionTwo
        subtitle="Introducing worksites"
        title="Let your profile do the talking"
        iconOne="/images/icons/people.svg"
        iconTwo="/images/icons/chat.svg"
        iconThree="/images/icons/conversation.svg"
        tagTitleOne="Invite your team"
        tagTitleTwo="Messages"
        tagTitleThree="Group Messages"
        description="Think of it as place to manage and run your trade business. House all messages, team member and more in the one place"
        animationImageOne="/images/shots/hero-shot5.png"
        animationImageTwo="/images/animations/notification.svg"
        animationImageThree="/images/animations/chat.svg"
        animationImageFive="/images/animations/members.svg"
      />
      <CenterAlignSection />
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>Item 4</CarouselItem>
      </Carousel>
    </Layout>
  )
}

export default IndexPage
