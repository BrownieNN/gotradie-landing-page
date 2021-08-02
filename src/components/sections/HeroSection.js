import React, { createRef, useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, H3, MediumText, SmallText } from "../styles/TextStyles"
import SecondaryButton from "../buttons/SecondaryButton"
import ContactForm from "../layout/ContactForm"
import GetStarted from "../buttons/GetStarted"
import lottie from "lottie-web"
import animationData from "../animations/lottie/walkthrough2.json"

function HeroSection(props) {
  let animationContainer = createRef()
  let anim = null

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

  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
    // console.log(event)
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      console.log("Document is clicked")
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper ref={ref}>
      <ContentWrapper>
        <TextWrapper>
          <Lockup>
            <Subtitle>Get back at it with</Subtitle>
            <Title>Tradie chat</Title>
            <img src="/images/lockup/sorted.svg" alt="Sorted" />
          </Lockup>

          <Description>
            We help tradies get back at it by simplifying the process of
            communicating with your team and client in one place.
          </Description>
          <ButtonWrapper>
            <InnerButtonWrapper>
              <GetStarted title="Get Started" />
              <SecondaryButton
                title="Schedule Demo"
                onClick={event => handleClick(event)}
              />
            </InnerButtonWrapper>
            <CreditCard>No credit card needed</CreditCard>
          </ButtonWrapper>
        </TextWrapper>
        <AnimationWrapper>
          <div className="mockup1" />
          <Walkthrough ref={animationContainer} />
        </AnimationWrapper>
      </ContentWrapper>
      <div ref={tooltipRef}>
        <ContactForm isOpen={isOpen} />
      </div>
      <CloseIcon isOpen={isOpen} />
    </Wrapper>
  )
}

export default HeroSection

const CloseIcon = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  content: "close";
  width: 40px;
  height: 40px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 17px 20px -13px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  border: 2px solid #789bb6;
  background: url("/images/icons/close.svg") no-repeat center;
  background-size: 20px;

  @media (max-width: 480px) {
    top: 40px;
    right: 10px;
  }
`

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

  @media (max-width: 480px) {
    width: 345px;
    .mockup1 {
      position: absolute;
      width: 260px;
      height: 361px;
      left: 60px;
      top: 40px;
    }
  }
`

const Walkthrough = styled.div`
  position: absolute;
  width: 272px;
  height: 550px;
  left: 44px;
  top: 0px;

  @media (max-width: 480px) {
    position: absolute;
    width: 200px;
    height: auto;
    left: 20px;
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
  overflow: visible;
  position: relative;
  @media (max-width: 480px) {
    z-index: 10;
  }
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 180px 0px 190px 0px;
  display: grid;
  grid-template-columns: 588px auto;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 100px 20px 680px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 60px;
    padding: 130px 20px 440px;
  }
`
const TextWrapper = styled.div`
  max-width: 588px;
  display: grid;
  padding-top: 80px;
  gap: 32px;

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

const Subtitle = styled(H3)`
  color: ${themes.dark.text1};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  text-transform: uppercase;
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 43px;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
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
const ButtonWrapper = styled.div`
  display: grid;
  gap: 8px;

  @media (max-width: 1354px) {
    display: grid;
    gap: 8px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`

const InnerButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 250px;
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`

const CreditCard = styled(SmallText)`
  width: 250px;
  color: white;
  text-align: center;

  @media (max-width: 480px) {
    width: 340px;
    text-align: center;
  }
`
