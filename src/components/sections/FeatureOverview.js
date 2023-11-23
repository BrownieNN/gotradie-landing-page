import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import featureData from '../../data/featureData';

// React component
const FeatureOverview = () => {

  const [isVisible, setIsVisible] = useState(false); // State to track visibility for the fade-in effect
  const sectionRef = useRef(null); // Ref for the section to observe

  const [activeFeature, setActiveFeature] = useState(featureData[0].id);
  const [activeImage, setActiveImage] = useState(featureData[0].image);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const handleBoxClick = (feature) => {
    setIsImageChanging(true); // Start the fade-out animation

    // Set a timeout equal to the fade-out duration before changing the image and starting the fade-in
    setTimeout(() => {
      setActiveFeature(feature.id);
      setActiveImage(feature.image);
      setIsImageChanging(false); // Reset the flag after the image has been updated
    }, 500); // This timeout duration should match the CSS animation duration
  };

  // Carousel settings for react-slick
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    afterChange: current => handleBoxClick(featureData[current])
  };

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
    <LayoutContainer>
        <ImageTransitionWrapper>
           {isImageChanging ? (
             // Apply a class that triggers the fade-out animation
             <FadeInImage src={activeImage} alt="Feature" className="image-exit-active" />
           ) : (
             // Render the image normally when not changing
             <FadeInImage src={activeImage} alt="Feature" />
           )}
         </ImageTransitionWrapper>
      <ContentContainer>
        <SmallTitle>LEVEL UP FROM WHATSAPP OR SMS</SmallTitle>
        <BigTitle>Why GoTradie is a <br />No-Brainer for your Business</BigTitle>
        {/* Mobile Slider */}
        <MobileSlider {...settings}>
            {featureData.map((feature, idx) => (
              <div key={feature.id}>
                <Box
                  active={feature.id === activeFeature}
                  onClick={() => handleBoxClick(feature)}
                >
                  <Icon src={feature.icon} alt="Icon" />
                  <Headline>{feature.headline}</Headline>
                  <BodyCopy>{feature.body}</BodyCopy>
                  <TextLink href={feature.linkUrl}>{feature.linkText}</TextLink>
                </Box>
              </div>
            ))}
          </MobileSlider>
        <BoxContainer>
          {featureData.map((feature) => (
            <Box
            key={feature.id}
            active={feature.id === activeFeature}
            onClick={() => handleBoxClick(feature)}
          >
            <Icon src={feature.icon} alt="Icon" />
            <Headline>{feature.headline}</Headline>
            <BodyCopy>{feature.body}</BodyCopy>
            <TextLink href={feature.linkUrl}>{feature.linkText}</TextLink>
          </Box>
        ))}
        </BoxContainer>
      </ContentContainer>
    </LayoutContainer>
    </Section>
  );
};

export default FeatureOverview;

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
  align-items: flex-start;
  justify-content: center;
  gap: 84px;
  padding: 150px 0px;


  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 345px;
    padding: 54px 0px;
    gap: 32px;
  }
`;

const FadeInImage = styled.img`
  animation: fadeIn 0.5s ease-in-out;
  width: auto;
  height: 685px;
  margin: auto;
  display: block; // This ensures that the image takes up the entire space for the fade effect.

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    height: 425px;
    margin: auto;
    display: block;
  }
`;

const ImageTransitionWrapper = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 340px;

  .image-exit-active {
    animation: fadeOut 0.5s ease-in-out forwards;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: auto;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 340px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  max-width: 840px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SmallTitle = styled.h5`
  color: #54c5c0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 14px;
  text-transform: uppercase;
  padding-bottom: 16px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const BigTitle = styled.h1`
  color: #ffffff;
  font-size: 45px;
  font-weight: 700;
  line-height: 51px;
  padding-bottom: 24px;
  max-width: 680px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
    text-align: center;
  }
`;

// Add this component for slider settings
const MobileSlider = styled(Slider)`
  @media (min-width: 769px) { // This makes Slider only effective on mobile
    display: none;
  }

  .slick-slide {
    padding: 0 0px; // Add padding to handle slick slider's "edge" effect if needed
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding-top: 32px;
    margin: 0;
    z-index: 0;
    li {
      margin: 0 4px; /* Adjust the spacing between dots */
      button {
        width: 12px; /* Adjust the dot size */
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5); /* Dot color */
        &::before {
          display: none; /* Hide the inner dot */
        }
        &:hover {
          background: rgba(255, 255, 255, 0.8); /* Hover color */
        }
      }
      &.slick-active {
        button {
          background: #54C5C0; /* Active dot color */
          width: 14px; /* Active dot size */
          height: 14px;
        }
      }
    }
  }
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }

  > div { // Make sure it targets the right children which are div elements
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
  }

  > div:nth-child(1) {
    animation-delay: 0s;
  }
  > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  > div:nth-child(3) {
    animation-delay: 0.4s;
  }
  > div:nth-child(4) {
    animation-delay: 0.6s;
  }
`;

const Box = styled.div`
text-align: left;
cursor: pointer;
transition: background-color 0.3s ease;
padding: 32px 32px;
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0);

${({ active }) =>
  active &&
  css`
  border: 1px solid #789BB6;
  background: rgba(255, 255, 255, 0.10);
  `}

&:hover {
  border: 1px solid #789BB6;
  background: rgba(255, 255, 255, 0.10);
}

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Icon = styled.img`
  height: 32px !important;
  width: 32px !important;
  margin-bottom: 12px;
`;

const Headline = styled.h3`
  color: #ffffff;
  font-size: 21px;
  font-weight: 700;
  line-height: 32px;
  padding-bottom: 12px;
  max-width: 225px;
`;

const BodyCopy = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  padding-bottom: 12px;
`;

const TextLink = styled.a`
  color: #54c5c0;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
  }
`;