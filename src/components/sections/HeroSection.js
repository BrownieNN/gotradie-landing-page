import React, { createRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { themes } from "../styles/ColorStyles";
import { ButtonText, H1, MediumText } from "../styles/TextStyles";
import lottie from "lottie-web";
import animationData from "../animations/lottie/walkthrough2.json";
import FourColumnSection from "./FourColumnSection";

function HeroSection(props) {
  let animationContainer = createRef();
  let anim = null;
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [scaleIn, setScaleIn] = useState(false);
  const emojiRef = createRef();
  const emojis = ["🔨", "🪚", "🧱", "🪠", "⚡", "🏠", "🪴", "🌳", "🚦", "🏗️", "🚧", "📋", "🪳", "🪨", "🦺", "🔑", "🪟",];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prevIndex) =>
        prevIndex === emojis.length - 1 ? 0 : prevIndex + 1
      );
      // Set scaleIn to true to trigger the animation
      setScaleIn(true);
    }, 1000);

    return () => clearInterval(interval);
  }, [emojis.length]);

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => anim.destroy();
  }, []);

  useEffect(() => {
    if (scaleIn) {
      const animationEndHandler = () => {
        setScaleIn(false);
      };
      const emojiElement = emojiRef.current;
      emojiElement.addEventListener("animationend", animationEndHandler);
      return () => {
        emojiElement.removeEventListener("animationend", animationEndHandler);
      };
    }
  }, [scaleIn]);

  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Lockup>
            <Title>
              The Messaging App <br />
              <span>
                Built For Work <AnimatedEmoji scaleIn={scaleIn} ref={emojiRef}>
                  {emojis[currentEmojiIndex]}
                </AnimatedEmoji>
              </span>
            </Title>
          </Lockup>
          <Description>
            Simplify the way your team, worksites and clients communicate &
            more.
          </Description>
          <FourColumnSection />
          <ButtonGroup>
            <a
              href="https://apps.apple.com/au/app/gotradie/id1497078123"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/app/apple-store-badge_sml.svg"
                alt="Apple Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.gotradie.paleale"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/app/google-play-badge_sml.svg"
                alt="Google Play Store"
              />
            </a>
          </ButtonGroup>
          <Subtitle>
            Try for free<span> no credit card required</span>
          </Subtitle>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const emojiScaleIn = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedEmoji = styled.span`
  font-size: 64px;
  margin-left: 4px;
  display: inline-block;
  transform-origin: center;
  animation: ${({ scaleIn }) =>
    scaleIn
      ? css`
          ${emojiScaleIn} 0.5s ease
        `
      : "none"};
  @media (max-width: 1354px) {

  }
  
  @media (max-width: 480px) {
    font-size: 40px;
  }  
`;

const AnimationWrapper = styled.div`
  position: relative;
  width: 558px;

  .mockup1 {
    position: absolute;
    width: 413px;
    height: 574px;
    left: 190px;
    top: 40px;
    background: url("/images/shots/hero-shot1.png") no-repeat;
    background-size: contain;
  }

  @media (max-width: 1354px) {
    .mockup1 {
      left: 150px;
      top: 40px;
    }
    
  }

  @media (max-width: 480px) {
    width: 345px;
    .mockup1 {
      position: absolute;
      width: 260px;
      height: 361px;
      left: 80px;
      top: 40px;
    }
  }
`

const Walkthrough = styled.div`
  position: absolute;
  width: 300px;
  height: 580px;
  left: 64px;
  top: 0px;

  @media (max-width: 1354px) {
    left: -26px;
    top: 0px;
  }

  @media (max-width: 480px) {
    position: absolute;
    width: 200px;
    height: auto;
    left: 24px;
    top: 0px;
  }
`

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
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
  padding: 54px 0px 54px 0px;
  display: flex;
  justify-content: center;

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
    width: 100%
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

  img {
    width: 200px;
    height: auto;
    margin-right: 16px;
  }
  
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
    display: flex;
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