import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import GetStarted from '../buttons/GetStarted';


// React component
function FeatureDetailRight(props) {

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

  const {
    subtitle,
    title,
    description,
    phoneHero,
    featureText,
    subFeatureOne,
    subIconOne,
    subFeatureTwo,
    subIconTwo,
    subFeatureThree,
    subIconThree,
    subFeatureFour,
    subIconFour,
    buttonTitle,
    buttonUrl,
  } = props

  // Conditionally render subtitle, title, and description
  const renderSubtitle = subtitle ? <SmallTitle>{subtitle}</SmallTitle> : null;
  const renderTitle = title ? <BigTitle>{title}</BigTitle> : null;
  const renderDescription = description ? <BodyCopy>{description}</BodyCopy> : null;
  const renderFeatureText = featureText ? <SubFeatureText>{featureText}</SubFeatureText> : null;
  // Conditionally render sub features and icons
  const renderSubFeatureOne = subFeatureOne ? (
    <Box>
      <img src={subIconOne} />
      {subFeatureOne}
    </Box>
  ) : null;

  const renderSubFeatureTwo = subFeatureTwo ? (
    <Box>
      <img src={subIconTwo} />
      {subFeatureTwo}
    </Box>
  ) : null;

  const renderSubFeatureThree = subFeatureThree ? (
    <Box>
      <img src={subIconThree} />
      {subFeatureThree}
    </Box>
  ) : null;

  const renderSubFeatureFour = subFeatureFour ? (
    <Box>
      <img src={subIconFour} />
      {subFeatureFour}
    </Box>
  ) : null; 

  return (
    <Section ref={sectionRef} isVisible={isVisible}>
    <LayoutContainer>
    <ContentContainer>
          {renderSubtitle}
          {renderTitle}
          {renderDescription}
          {renderFeatureText}
          <BoxContainer>
            {renderSubFeatureOne}
            {renderSubFeatureTwo}
            {renderSubFeatureThree}
            {renderSubFeatureFour}
          </BoxContainer>
          <ButtonWrapper>
            <InnerButtonWrapper>
              <GetStarted title={buttonTitle || "Get Started" } url={buttonUrl || "https://app.gotradie.com.au/signup"} />
            </InnerButtonWrapper>
          </ButtonWrapper>
        </ContentContainer>
      <ImageContainer>
        <img src={phoneHero} />
      </ImageContainer>
    </LayoutContainer>
    </Section>
  );
};


export default FeatureDetailRight

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
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 16px;
width: 100%;
margin: 0 auto;
align-items: center;
gap: 0px;
padding: 150px 0px;
overflow: hidden;


@media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
  max-width: 345px;
  padding: 80px 0px;
  gap: 32px;

  // Assuming you have two child elements, you can reverse their order like this:
  & > :first-child {
    order: 2;
  }
  & > :last-child {
    order: 1;
  }
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
  width: 588px;

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
width: 100%;

  img {
    position: absolute;
    width: 660px;
    top: 100px;
    right: 0px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
  img {
    position: relative;
    width: 100%;
    top: 0px;
    right: 0px;
    }
  }
`;

const ContentContainer = styled.div`
width: 588px;
display: block;
padding-right: 50px;
margin-left: 130px;

  @media (max-width: 768px) {
    max-width: 345px !important;
    padding-right: 0px;
    margin-left: 0px;
  }
`;

const SmallTitle = styled.h5`
  color: #54c5c0;
  font-family: "Montserrat-Bold", Helvetica;
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

const SubFeatureText = styled.h5`
  color: #54c5c0;
  font-family: "Montserrat-Bold", Helvetica;
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
  font-family: "Montserrat-Bold", Helvetica;
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

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    max-width: 345px;
    gap: 8px;
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
display: flex;
justify-content: start;
align-items: center;
gap: 16px;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 14px; /* 140% */
color: #FFFFFF;
text-align: left;
transition: background-color 0.3s ease;
padding: 16px;
border-radius: 8px;
border: 1px solid #789BB6;
background: rgba(255, 255, 255, 0.10);

img{
  width: 20px;
  height: 20px;
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
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 21px;
  font-weight: 700;
  line-height: 32px;
  padding-bottom: 12px;
  max-width: 225px;
`;

const BodyCopy = styled.p`
  color: #ffffff;
  font-family: "Montserrat-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextLink = styled.a`
  color: #54c5c0;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 32px;
  display: grid;
  gap: 8px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 480px) {
  }
`

const InnerButtonWrapper = styled.div``