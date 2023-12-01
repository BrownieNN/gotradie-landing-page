import React, { createRef, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import lottie from "lottie-web"
import FeatureAnimationOne from "../animations/FeatureOneAnimation"
import GetStarted from "../buttons/GetStarted"
import SecondaryButton from "../buttons/SecondaryButton"
import animationData from "../animations/lottie/Walkthrough-updated.json"

function HeroTwoColumn(props) {
  let animationContainer = createRef();
  let anim = null;

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    })
    return () => anim.destroy() // optional clean up for unmounting
  }, [])


  const {
    subtitle,
    title,
    description,
    animationImageOne,
    animationImageTwo,
    buttonTitle,
    buttonUrl,
    buttonTitleTwo,
    buttonUrlTwo
  } = props
  return (
    <Wrapper id="features">
      <ContentWrapper>
        <TextWrapper>
          <Lockup>
            <Subtitle>{subtitle || "No nonense communication"}</Subtitle>
            <Title>{title || "Messages all in one place"}</Title>
          </Lockup>
          <Description>
            {description ||
              "No need for mutliple apps. We made it easy to chat to your team, client & tradies in one place"}
          </Description>
          <ButtonGroup>
            <GetStarted title="Try for free" url= "https://app.gotradie.com.au/signup" />
            <SecondaryButton title="Book demo" url= "https://calendly.com/adamfazzani_gotradie/30min" />
          </ButtonGroup>
        </TextWrapper>
        <AnimationWrapper>
          <Animation ref={animationContainer} />
        </AnimationWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroTwoColumn

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  //background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 60px 0px 180px 0px;
  display: grid;
  gap: 0px;
  grid-template-columns: auto 588px;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 100px 20px 0px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 60px;
    padding: 64px 20px 0px;
  }
`

const AnimationWrapper = styled.div`
  max-width: 558px;
  display: flex;
  margin: 0 auto;
  @media (max-width: 480px) {
    display: none;
  }
`

const Animation = styled.div`
  max-width: 558px;
  height: auto;
  @media (max-width: 480px) {
    max-width: 345px;
  }
`

const ImageWrapper = styled.div`
  max-width: 588px;
  height: 359px;
  position: relative;

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
    :nth-child(4) {
      animation-delay: 0.6s;
    }
  }

   @media (max-width: 480px) {
    display: none;
   }
`

const TextWrapper = styled.div`
  max-width: 588px;
  display: grid;
  padding-top: 50px;
  padding-left: 32px;
  gap: 16px;

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
    :nth-child(4) {
      animation-delay: 0.6s;
    }
  }

  @media (max-width: 480px) {
    max-width: 345px;
    padding-left: 0px;
    -webkit-box-pack: center;
    display: grid;
    grid-template-columns: 330px;
    gap: 30px;
    justify-content: center;
    text-align: center;
    padding: 0px 0px;
  } 
`

const Subtitle = styled(MediumText)`
  color: ${themes.dark.text1};
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 2px;

  @media (max-width: 480px) {
    text-align: left;
  }
`

const Title = styled(H1)`
font-size:54px;
line-height: 64px;
  color: ${themes.dark.text1};
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  

  @media (max-width: 480px) {
    font-size: 40px;
    line-height: 45px;
    text-align: left;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};

  @media (max-width: 480px) {
    text-align: left;
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
const ButtonGroup = styled.div`
display: flex;
justify-content: start;
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

const TagWrapper = styled.div`
  display: flex;

  @media (max-width: 1354px) {
    justify-content: center;
    display: flex;
  }

  @media (max-width: 480px) {
    justify-content: center;
    display: grid;
  }
`
