import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';


// React component
function GifSection(props) {

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
        threshold: 0.6, // Trigger the callback when the section is at least 10% visible in the viewport
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
    caption,
    gifImage,
  } = props

  // Conditionally render subtitle, title, and description
  const renderCaption = caption ? <Caption>{caption}</Caption> : null;

  return (
    <Section ref={sectionRef} isVisible={isVisible}>
    <LayoutContainer>
      <ImageContainer>
        <img src={gifImage} />
      </ImageContainer>
      <ContentContainer>
          {renderCaption}
        </ContentContainer>
    </LayoutContainer>
    </Section>
  );
};


export default GifSection

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(2px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
`;

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

// Styled components
const LayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1234px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 0px;
  padding: 62px 0px;


  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 345px;
    padding: 0px 0px;
    gap: 16px;
  }
`;

const ImageContainer = styled.div`
  width: 680px;
  margin: auto;

  img {
    display: block;
    width: 680px;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    img {
      display: block;
      max-width: 345px;
      height: auto;
    }

  }
`;

const ContentContainer = styled.div`
  width: 960px;
  display: block;
  margin-top: 24px;

  @media (max-width: 768px) {
    max-width: 345px !important;
    padding-left: 0px;
    margin-top: 0px;
  }
`;

const Caption = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  color: #54C5C0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    text-align: center;
  }
`;