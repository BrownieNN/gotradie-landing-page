import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, H3, MediumText, SmallText } from "../styles/TextStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import SecondaryButton from "../buttons/SecondaryButton"
import MockupAnimation from "../animations/MockupAnimation"

function HeroSection() {
  return (
    <Wrapper>
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
              <PurchaseButton title="Get Started" />
              <SecondaryButton title="Schedule Demo" />
            </InnerButtonWrapper>
            <CreditCard>No credit card needed</CreditCard>
          </ButtonWrapper>
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

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
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 0px 340px 0px;
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
    max-width: 375px;
    grid-template-columns: 375px;
    gap: 60px;
    padding: 130px 20px 440px;
  }
`
const TextWrapper = styled.div`
  max-width: 588px;
  display: grid;
  padding-top: 60px;
  gap: 32px;

  @media (max-width: 480px) {
    max-width: 375px;
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
