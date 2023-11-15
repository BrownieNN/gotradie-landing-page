import React, { createRef, useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from "styled-components";
import { themes } from "../styles/ColorStyles";
import { ButtonText, H1, MediumText } from "../styles/TextStyles";
import lottie from "lottie-web";
import animationData from "../animations/lottie/walkthrough2.json";
import FourColumnSection from "./FourColumnSection";
import GetStarted from "../buttons/GetStarted";
import SecondaryButton from "../buttons/SecondaryButton";

function FinalSection(props) {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility for the fade-in effect
  const sectionRef = useRef(null); // Ref for the section to observe

  let animationContainer = createRef();
  let anim = null;

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

  // Set up the intersection observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Only one entry is observed: the sectionRef current element.
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility state to true when the section is intersecting the viewport
          // If you only want the animation to occur once, disconnect the observer after this
          observer.disconnect();
        }
      },
      {
        threshold: 0.4, // Trigger the callback when the section is at least 10% visible in the viewport
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <Section ref={sectionRef} isVisible={isVisible}>
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Lockup>
            <Title>
            Transform chaos <br />
              <span>
              into collaboration
              </span>
            </Title>
          </Lockup>
          <Description>
          Join 1000’s of trade, services and construction businesses already benefiting from making the switch.
          </Description>
          <ButtonGroup>
          <GetStarted title="Try for free" url= "https://app.gotradie.com.au/signup" />
          <SecondaryButton title="Book demo" url= "https://calendly.com/adamfazzani_gotradie/30min" />
          </ButtonGroup>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
    </Section>
  );
}

export default FinalSection;

// Styled component for the section
const Section = styled.section`
transition: opacity 0.6s ease-out, transform 0.6s ease-out;
opacity: 0;
transform: translateY(20px);
visibility: hidden;

// When isVisible is true, apply the styles for the visible state
${({ isVisible }) =>
  isVisible &&
  css`
    opacity: 1;
    transform: translateY(0px);
    visibility: visible;
  `}
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
  padding: 150px 0px 150px 0px;
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
  font-size: 64px;
  line-height: 71px;
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