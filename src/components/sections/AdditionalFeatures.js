import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import AdditionalData from '../../data/AdditionalData';

// React component
const AdditionalFeatures = () => {

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
        threshold: 0.2, // Trigger the callback when the section is at least 10% visible in the viewport
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
      <ContentContainer>
        <SmallTitle>Additonal Features</SmallTitle>
        <BigTitle>But wait, there’s more</BigTitle>
        {/* Mobile Slider */}
        <BoxContainer>
          {AdditionalData.map((work, index) => (
           <Box 
           key={work.id}
           index={index}
         >
                <TextWrapper>
                <Subtitle>{work.subtitle}</Subtitle>
                <Headline>{work.title}</Headline>
                    <BodyCopy>{work.body}</BodyCopy>
                </TextWrapper>
                <ImageWrapper>
                    <TileImage src={work.image} alt={work.title} />
                </ImageWrapper>
          </Box>
        ))}
        </BoxContainer>
      </ContentContainer>
    </LayoutContainer>
    </Section>
  );
};

export default AdditionalFeatures;

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
  justify-content: center;
  gap: 84px;
  padding: 125px 0px;


  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 345px;
    padding: 54px 0px;
    gap: 32px;
  }
`;


const ContentContainer = styled.div`
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Subtitle = styled.h5`
  color: #54c5c0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 14px;
  text-transform: uppercase;
  padding-bottom: 16px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextWrapper = styled.div``

const ImageWrapper = styled.div`

    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: end;

@media (max-width: 768px) {
  width: 300px;
  height: 200px;
  // border: 1px solid orange;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0px 0px 0px 0px;

  &:nth-child(3) {
    border: 1px solid blue;
  }
}

  @media (min-width: 769px) {
    // Ensure the image takes the second column on desktop for the third tile
    &:nth-child(3) {
      width: 227px;
      height: 399px;
      order: 2; // This will move the image to the right for the third tile
    }
  }
`;

const BigTitle = styled.h1`
  color: #ffffff;
  font-size: 45px;
  font-weight: 700;
  line-height: 51px;
  padding-bottom: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
    text-align: center;
  }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(2px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
`;


const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Stacks content on mobile by default
  gap: 24px;
  padding: 45px 45px 0px 45px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.10);
  border: 1px solid #789BB6;

  @media (max-width: 768px) {
    padding: 32px 32px 0px 32px;
    margin-bottom: 24px;

    &:nth-child(1) {
      // Target the image wrapper inside the third tile to adjust its width
      > :last-child {
        // border: 1px solid blue;
        padding: 0px 0px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: start;

      }
    }
    &:nth-child(3) {
      grid-template-columns: minmax(auto, 2fr) 1fr; // Adjust the ratio according to your design needs
      // Target the image wrapper inside the third tile to adjust its width
      > :last-child {
        grid-column: 1;
        // border: 1px solid pink;
        padding: 0px 0px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: start;

      }
    }

    &:nth-child(4) {
      // Target the image wrapper inside the third tile to adjust its width
      > :last-child {
        // border: 1px solid blue;
        padding: 0px 0px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;

      }
  }
}

  @media (min-width: 769px) {
    // // This will create a side-by-side layout on desktop for all boxes
    // grid-template-columns: repeat(2, minmax(auto, 1fr));
    // align-items: center;

    // Specific style for the third tile to switch image to the right
    &:nth-child(3) {
      grid-template-columns: minmax(auto, 2fr) 1fr; // Adjust the ratio according to your design needs

      // Target the image wrapper inside the third tile to adjust its width
      > :last-child {
        grid-column: 2;
        width: 227px; // Or whatever width you want the image to be
        height: 397px;
        // border: 1px solid pink;
        padding: 0px 0px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: start;

      }
    }
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
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Headline = styled.h3`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  padding-bottom: 12px;
  max-width: 320px;
`;

const BodyCopy = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  padding-bottom: 12px;
`;

const TileImage = styled.img`
      width: 460px;

  // Adjustments for the third tile's image
  ${Box}:nth-child(3) & {
    width: 100%; // Adjust the width as necessary
    margin-top: 0;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%; // Let it fill the container on mobile

    ${Box}:nth-child(3) & {
      max-width: 50%;
      height: auto;
      display: block;
    }
  }

  // Special styles for the third tile on mobile using a prop
  ${({ isThird }) =>
    isThird &&
    css`
      @media (max-width: 768px) {
        // Adjust the width as necessary, you can use percentages or fixed widths
        width: 50%; // Example for half-width on mobile for the third tile
        // Apply height adjustment if necessary, though width should suffice for responsive designs
      }
    `}
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
