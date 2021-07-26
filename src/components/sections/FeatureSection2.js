import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import Losenge from "../buttons/losenge"
import FeatureAnimationTwo from "../animations/FeatureTwoAnimation"

function FeatureSectionTwo(props) {
  const {
    subtitle,
    title,
    description,
    iconOne,
    iconTwo,
    iconThree,
    tagTitleOne,
    tagTitleTwo,
    tagTitleThree,
    animationImageOne,
    animationImageTwo,
    animationImageThree,
    animationImageFour,
    animationImageFive,
  } = props
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Lockup>
            <Subtitle>{subtitle || "No nonense communication"}</Subtitle>
            <Title>{title || "Messages all in one place"}</Title>
          </Lockup>
          <TagWrapper>
            <Losenge
              tagTitle={tagTitleOne}
              icon={iconOne || "/images/icons/conversation.svg"}
            />
            <Losenge
              tagTitle={tagTitleTwo}
              icon={iconTwo || "/images/icons/conversation.svg"}
            />
            <Losenge
              tagTitle={tagTitleThree}
              icon={iconThree || "/images/icons/conversation.svg"}
            />
          </TagWrapper>
          <Description>
            {description ||
              "No need for mutliple apps. We made it easy to chat to your team, client & tradies in one place"}
          </Description>
          <ButtonWrapper>
            <InnerButtonWrapper>
              <PurchaseButton title="Get Started" />
            </InnerButtonWrapper>
          </ButtonWrapper>
        </TextWrapper>
        <FeatureAnimationTwo
          backgroundOne={animationImageOne}
          backgroundTwo={animationImageTwo}
          backgroundThree={animationImageThree}
          backgroundFour={animationImageFour}
          backgroundFive={animationImageFive}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default FeatureSectionTwo

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
  padding: 60px 0px 340px 0px;
  display: grid;
  gap: 33px;
  grid-template-columns: auto 588px;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 0px 20px 680px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 375px;
    grid-template-columns: 375px;
    gap: 60px;
    padding: 0px 20px 440px;
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

const Subtitle = styled(MediumText)`
  color: ${themes.dark.text1};
  font-weight: 500;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
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
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`

const TagWrapper = styled.div`
  display: flex;

  @media (max-width: 1354px) {
    justify-content: center;
    display: flex;
  }

  @media (max-width: 480px) {
    justify-content: center;
    display: grid;
  }
`

const InnerButtonWrapper = styled.div``
