import React, { useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { themes } from "../components/styles/ColorStyles";
import { ButtonText, H1, MediumText } from "../components/styles/TextStyles";
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import GetStarted from "../components/buttons/GetStarted";
import SecondaryButton from "../components/buttons/SecondaryButton";
import FeatureDetailLeft from "../components/sections/FeatureDetailLeft";
import FeatureDetailRight from "../components/sections/FeatureDetailRight";
import FeatureDetailRightLrg from "../components/sections/FeatureDetailRightLrg";
import AdditionalFeatures from "../components/sections/AdditionalFeatures";
import FinalSection from "../components/sections/FinalSection";

function Features() {

  // Create refs for the target sections
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

    const seoProps = {
        title: "GoTradie - Do more with less ⚡",
        description: "Simple features to run your business day-to-day",
        imageUrl: "https://gt-landing-staging.netlify.app/images/meta/website-meta-generic.png", // Use the absolute URL
        imageWidth: 1200, // Specify the image width
        imageHeight: 630, // Specify the image height
        url: "https://www.gotradie.com.au/Features",
      };

      // Scroll to a specific section when a link is clicked
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

    return(
        <Layout>
        <SEO {...seoProps} />
        <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Lockup>
              <Title>
              Helping you keep it together,<br />
                <span>
                do more with less
                </span>
              </Title>
            </Lockup>
            <Description>
                Simple features, tailored for teams
            </Description>
            <ButtonGroup>
            <GetStarted title="Try for free" url= "https://app.gotradie.com.au/signup" />
            <SecondaryButton title="Book demo" url= "https://calendly.com/adamfazzani_gotradie/30min" />
            </ButtonGroup>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
      <LosengeWrapper>
          <Losenge onClick={() => scrollToSection(section1Ref)} title="Chats">
            Chats
          </Losenge>
          <Losenge onClick={() => scrollToSection(section2Ref)} title="To-do lists">
            To-do lists
          </Losenge>
          <Losenge onClick={() => scrollToSection(section3Ref)} title="Clips">
            Clips
          </Losenge>
          <Losenge onClick={() => scrollToSection(section4Ref)} title="Webapp">
            Web app
          </Losenge>
          <Losenge onClick={() => scrollToSection(section5Ref)} title="More">
            More
          </Losenge>
            {/* Add more links as needed */}
      </LosengeWrapper>
      <div ref={section1Ref}>
      <FeatureDetailLeft
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="Chats"
        title="Streamlined communication"
        description="Cut through the noise. One organised inbox for teams, worksites, and clients chats. Enjoy greater context on job updates, searchable media and to-do lists"
        phoneHero="/images/phones/home-hero-features.png"
        featureText="OUT OF THE BOX FEATURES"
        subFeatureOne="Language translation "
        subIconOne="/images/icons/translate.svg"
        subFeatureTwo="Read receipts on messages"
        subIconTwo="/images/icons/eye.svg"
        subFeatureThree="Emoji reactions"
        subIconThree="/images/icons/thumbs-up.svg"
        subFeatureFour="Content privacy"
        subIconFour="/images/icons/lock.svg"
      />
      </div>
      <div ref={section2Ref}>
       <FeatureDetailRight
        // Assign the ref to a standard HTML element within FeatureDetailLeft
        innerRef={section2Ref}
        subtitle="TO-DO LISTS"
        title="Simple co-ordination the way you like it"
        description="Helping you keep it together with  To-do List and Tasks. Create lists, assign tasks, set deadlines, attach documents, and build accountability"
        phoneHero="/images/phones/phone-tasks.png"
        featureText="OUT OF THE BOX FEATURES"
        subFeatureOne="Filter by assigned, team & more"
        subIconOne="/images/icons/filter.svg"
        subFeatureTwo="Add docs, photo’s & videos to tasks"
        subIconTwo="/images/icons/gallery.svg"
        subFeatureThree="Shuffle order of To-do list"
        subIconThree="/images/icons/shuffle.svg"
        subFeatureFour="Auto-save To-do lists"
        subIconFour="/images/icons/valid.svg"
      />
      </div>
      <div ref={section3Ref}>
      <FeatureDetailLeft 
      // Assign the ref to a standard HTML element within FeatureDetailLeft
        subtitle="CLIPS"
        title="Capture every step along the way"
        description="Clips, the photo folders that transform your media management. Name and add photos for clarity. Replace your phones camera app and separate your work from personal gallery"
        phoneHero="/images/phones/phone-clips.png"
        featureText="OUT OF THE BOX FEATURES"
        subFeatureOne="Unlimited slides on paid tiers"
        subIconOne="/images/icons/slides.svg"
        subFeatureTwo="Share off platform to clients"
        subIconTwo="/images/icons/share.svg"
        subFeatureThree="Download slides to device"
        subIconThree="/images/icons/download.svg"
        subFeatureFour="Share to profile to standout"
        subIconFour="/images/icons/star.svg"
      />
      </div>
      <div ref={section4Ref}>
      <FeatureDetailRightLrg
        className="webapp-image"
        subtitle="Webapp"
        title="Bridging the gap between site & office"
        description="Say goodbye to unnecessary site visits or No more waiting to get home or back to the office. Share & receive content across your mobile, tablet and desktop devices and stay in control from anywhere"
        phoneHero="/images/phones/webapp.png"
        featureText="OUT OF THE BOX FEATURES"
        subFeatureOne="To-lists & tasks"
        subIconOne="/images/icons/filter.svg"
        subFeatureTwo="Create & edit clips"
        subIconTwo="/images/icons/slides.svg"
        subFeatureThree="Team, worksite and client chats"
        subIconThree="/images/icons/conversation.svg"
        subFeatureFour="Team management"
        subIconFour="/images/icons/people.svg"
      />
      </div>
      <div ref={section5Ref}>
      <AdditionalFeatures />
      </div>
      <FinalSection />
      </Layout>
    )
}

export default Features;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const LosengeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  * {
    opacity: 0;
    animation: ${animation} 1s 0.1s forwards;
  }

  @media (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    justify-content: start;
    width: 100%;
    overflow-x: auto; /* Enable horizontal scrolling on mobile */
    /* Hide the scrollbar */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Losenge = styled.div`
width: 140px;
display: block;
border: 1px solid pink;
padding: 16px 24px;
background: rgba(255, 255, 255, 0.10);
border: 1px solid #789BB6;
border-radius: 100px;
color: #FFF;
text-align: center;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 15px; /* 100% */

@media (max-width: 768px) {
  min-width: 140px;
  overflow: hidden;
}
`

const Wrapper = styled.div`
  //background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  display: block;
  @media (max-width: 480px) {
  
  }
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 0px 72px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1354px) {
    padding: 54px 54px 54px 54px;
  }

  @media (max-width: 480px) {
    padding: 54px 0px 45px 0px;
  }
`
const TextWrapper = styled.div`
  max-width: 960px;
  display: grid;
  padding-top: 0px;
  gap: 32px;
  justify-content: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 0 24px;
    gap: 24px;
  }

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`



const Title = styled(H1)`
  font-size: 74px;
  line-height: 80px;
  text-align: center;
  color: ${themes.dark.text1};
  span {
    // background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
    // background-clip: text;
    // -webkit-background-clip: text;
    // color: transparent;
    color: #54C5C0;
}

@media (max-width: 1354px) {
  text-align: center;
}

  @media (max-width: 480px) {
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    /* Remove the <br/> on mobile */
    br {
      display: none;
    }
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  text-align: center;
  padding: 0 100px;
    span {
      background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
  }

  @media (max-width: 1354px) {
    padding: 0px;
    text-align: center;
  }
  @media (max-width: 480px) {
    text-align: center;
    font-size: 15px;
  }
`
const Lockup = styled.div`
  display: grid;
  gap: 10px;

  img {
    width: 476px;
  }

  @media (max-width: 1354px) {
    display: grid;
    gap: 10px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    display: grid;
    gap: 10px;
    justify-content: center;
    text-align: center;
    img {
      width: 307px;
    }
  }
`

const Subtitle = styled(ButtonText)`
  color: ${themes.dark.text1};
  text-align: center; 

  span {
    color: #54C5C0;
}
@media (max-width: 480px) {
  font-size: 11px;
  text-align: center;
}
`

const ButtonGroup = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 24px;
align-self: stretch;

  
  @media (max-width: 1354px) {
    display: flex;
    img {
      width: 250px;
      height: 75px;
      margin-right: 0px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0px;
    display: block;
    gap: 8px;
    img {
      width: 100%;
      height: auto;
      margin-right: 0px;
    }
    /* Add flex-grow property to make buttons fill the available space */
    a {
      flex-grow: 1;
    }
  }
`;