import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import TradeLogo from "../layout/TradeLogos"
import { themes } from "../styles/ColorStyles"
import { H2 } from "../styles/TextStyles"

function LogoSection(props) {

  const [isVisible, setIsVisible] = useState(false); // State to track visibility for the fade-in effect
  const sectionRef = useRef(null); // Ref for the section to observe

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
        threshold: 0.8, // Trigger the callback when the section is at least 10% visible in the viewport
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

  const {
    title
  } = props
  return (
    <Section ref={sectionRef} isVisible={isVisible}>
    <Wrapper id="industries">
      <ContentWrapper>
        <TextWrapper>
          <Title>{title || "Trusted by 1000’s of trade companies & associations"}</Title>
        </TextWrapper>
        <TradeLogo />
      </ContentWrapper>
    </Wrapper>
    </Section>
  )
}


export default LogoSection

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

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`
const Wrapper = styled.div`
  //background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: visible;
`

const ContentWrapper = styled.div`
  max-width: 954px;
  margin: 0 auto;
  padding: 120px 0px 0px 0px;
  display: grid;
  gap: 33px;
  justify-content: center;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    max-width: 768px;
    gap: 30px;
    padding: 32px 20px 100px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 20px;
    padding: 60px 20px 100px;
    justify-content: center;
  }
`

const TextWrapper = styled.div`
  max-width: 954px;
  display: grid;
  gap: 32px;
  margin: auto;

  @media (max-width: 1354px) {
    max-width: 588px;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    justify-content: center;
    text-align: center;
    padding: 0 8px;
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

const Title = styled(H2)`
  color: ${themes.dark.text1};
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 6px;
  text-transform: uppercase;
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    letter-spacing: 4px;
  }
`