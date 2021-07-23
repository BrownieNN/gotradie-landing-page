import React from "react"
import styled, { keyframes } from "styled-components"
import SecondaryButton from "../buttons/SecondaryButton"
import TradeGrid from "../layout/TradeGrid"
import { themes } from "../styles/ColorStyles"
import { H1, H2, MediumText, SmallText } from "../styles/TextStyles"

function CenterAlignSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Whether your a sole trader or been on the tools for years
          </Title>
          <Body>
            We’ve made sure the app is a one size fits all app. Whether your
            specialised trade to multiple cars on road sort of business we’ve
            got you sorted
          </Body>
        </TextWrapper>
        <TradeGrid />
        <ButtonWrapper>
          <SecondaryButton title="30+ more trades" />
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CenterAlignSection

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`
const Wrapper = styled.div`
  //background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: visible;
`
const ButtonWrapper = styled.div`
  margin: auto;
`

const ContentWrapper = styled.div`
  max-width: 954px;
  margin: 0 auto;
  padding: 60px 0px 340px 0px;
  display: grid;
  gap: 33px;
  justify-content: center;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    max-width: 768px;
    gap: 60px;
    padding: 60px 20px 680px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 375px;
    grid-template-columns: 375px;
    gap: 60px;
    padding: 60px 20px 440px;
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

const Body = styled(MediumText)`
  text-align: center;
  color: ${themes.dark.text1};
`
