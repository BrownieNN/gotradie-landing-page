import React from "react"
import styled, { keyframes } from "styled-components"
import SecondaryButton from "../buttons/SecondaryButton"
import TradeGrid from "../layout/TradeGrid"
import { themes } from "../styles/ColorStyles"
import { H2, MediumText } from "../styles/TextStyles"

function CenterAlignSection() {
  return (
    <Wrapper id="industries">
      <ContentWrapper>
        <TextWrapper>
         <Subtitle>Is this for me?</Subtitle>
          <Title>Built for teams <span>from 1 to 1,000+</span></Title>
          <Body>
          The app built for an industry. Whether your jobs in the office or getting the hand dirty on site. We’ve got you covered.
          </Body>
        </TextWrapper>
        <TradeGrid />
        <ButtonWrapper>
          <SecondaryButton title="& many more" />
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
  padding: 60px 0px 140px 0px;
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
    gap: 60px;
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
    background: linear-gradient(90deg, #54C5C0 0%, #789BB6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    text-align: center;
  }
`

const Subtitle = styled(MediumText)`
  color: ${themes.dark.text1};
  font-weight: 500;
  text-align: center;
`

const Body = styled(MediumText)`
  text-align: center;
  color: ${themes.dark.text1};
  max-width: 780px;
  margin: auto;
`
