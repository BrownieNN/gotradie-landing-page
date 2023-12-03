import React, { useEffect, useRef, useState } from "react"
import styled, { css, keyframes } from 'styled-components';
import PurchaseButton from "../buttons/PurchaseButton"
import { H3, SmallText } from "../styles/TextStyles"

function PanelSection(props) {

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
  title,
  subtitle,
  buttonTitle,
  buttonUrl,
  profile,
} = props
  return (
    <Wrapper ref={sectionRef} isVisible={isVisible}>
      <PanelWrapper>
        <ContentWrapper>
          <LeftWrapper>
          <Profile>
            <img src={profile || "/images/avatars/adam.png"} alt="adam" />
          </Profile>
          <TextWrapper>
            <Title>{title || "Learn why your business should make the switch? "}</Title>
            <Subtitle>
            {subtitle || "Read a short blog by our Founder, Adam about why your Business should ditch using Whatsapp, SMS, Email and move to a dedicated communication platform built for work."} 
            </Subtitle>
          </TextWrapper>
          </LeftWrapper>
          <ButtonGroup>
            <PurchaseButton
              title={buttonTitle || "read more"}
              className="button"
              to={buttonUrl || "/Why"}
            />
          </ButtonGroup>
        </ContentWrapper>
      </PanelWrapper>
      {/* <div ref={tooltipRef}>
        <ContactForm isOpen={isOpen} />
      </div> */}
    </Wrapper>
  )
}

export default PanelSection

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(2px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
`;

const Wrapper = styled.div`
  max-width: 1128px;
  padding: 0px 0px 80px 0px;
  margin: auto;
  position: relative;
  z-index: 2;
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

  @media (max-width: 1354px) {
    max-width: 588px;
    grid-template-columns: auto;
    gap: 24px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
  }
`

const PanelWrapper = styled.div`
  background: #153549;
  padding: 45px 45px;
  border-radius: 16px;
  margin: auto;

  @media (max-width: 1354px) {
    padding: 45px 45px;
  }

  @media (max-width: 480px) {
    padding: 32px 32px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1354px) {
    max-width: 588px;
    grid-template-columns: auto;
    gap: 24px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    display: block;
  }
`

const Profile = styled.div`
  width: 80px;
  height: 80px;
  margin: auto;

  img {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
  `

const LeftWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 480px) {
    max-width: 280px;
    display: block;
  }
  
`

const TextWrapper = styled.div`
  display: block;
  gap: 6px;

  @media (max-width: 1354px) {
    max-width: 588px;
    grid-template-columns: auto;
    margin: auto;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    display: block;
  }
`

const Title = styled(H3)`
  color: white;
  padding-bottom: 8px;
  line-height: 34px;

  span {
    background: linear-gradient(90deg, #128C7E 0%, #25D366 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  @media (max-width: 480px) {

  }
`

const Subtitle = styled(SmallText)`
  color: white;
  line-height: 21px;
  font-weight: 500;

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`

const ButtonGroup = styled.div`
display: flex;
align-items: end;
  .button {
    margin: auto;
  }
  @media (max-width: 1354px) {
    .button {
      width: 280px;
      margin: auto;
    }
  }

  @media (max-width: 480px) {
    max-width: 280px;
    grid-template-columns: auto;
    margin: auto;
  }
`
