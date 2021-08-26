import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H2, MediumText } from "../styles/TextStyles"

export default function AppSection() {
  return (
    <Wrapper id="app">
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Heard enough?
            <br />
            Download now
          </Title>
          <Subtitle>Get our free app and give it a whirl</Subtitle>
        </TextWrapper>
        <ButtonGroup>
          <a
            href="https://apps.apple.com/au/app/gotradie/id1497078123"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/app/apple-store-badge.svg" alt="Apple Store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.gotradie.paleale"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/app/google-play-badge.svg"
              alt="Google Play Store"
            />
          </a>
        </ButtonGroup>
      </ContentWrapper>
    </Wrapper>
  )
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  //background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: visible;
`
const ButtonGroup = styled.div`
  margin: auto;
  img {
    width: 250px;
    height: 75px;
    margin-right: 16px;
  }
  @media (max-width: 1354px) {
    img {
      width: 250px;
      height: 75px;
      margin-bottom: 16px;
      margin-right: 0px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 250px;
      height: 75px;
      margin-bottom: 16px;
      margin-right: 0px;
    }
  }
`

const ContentWrapper = styled.div`
  max-width: 954px;
  margin: 0 auto;
  padding: 60px 0px 240px 0px;
  display: grid;
  gap: 33px;
  justify-content: center;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    max-width: 768px;
    gap: 60px;
    padding: 60px 20px 180px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 30px;
    padding: 60px 20px 124px;
    justify-content: center;
  }
`

const TextWrapper = styled.div`
  max-width: 954px;
  display: grid;
  padding-top: 60px;
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
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 480px) {
  }
`

const Subtitle = styled(MediumText)`
  text-align: center;
  color: ${themes.dark.text1};
`
