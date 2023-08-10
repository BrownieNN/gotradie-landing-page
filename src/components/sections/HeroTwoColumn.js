import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import FeatureAnimationOne from "../animations/FeatureOneAnimation"
import GetStarted from "../buttons/GetStarted"
import SecondaryButton from "../buttons/SecondaryButton"

function HeroTwoColumn(props) {
  const {
    subtitle,
    title,
    description,
    animationImageOne,
    animationImageTwo,
    buttonTitle,
    buttonUrl,
    buttonTitleTwo,
    buttonUrlTwo
  } = props
  return (
    <Wrapper id="features">
      <ContentWrapper>
        <TextWrapper>
          <Lockup>
            <Subtitle>{subtitle || "No nonense communication"}</Subtitle>
            <Title>{title || "Messages all in one place"}</Title>
          </Lockup>
          <Description>
            {description ||
              "No need for mutliple apps. We made it easy to chat to your team, client & tradies in one place"}
          </Description>
          <ButtonWrapper>
          <GetStarted title={buttonTitle || "Try for free" } url={buttonUrl || "https://app.gotradie.com.au/signup"} />
          <SecondaryButton title={buttonTitleTwo || "Ask for demo" } url={buttonUrlTwo || "https://calendly.com/adamfazzani_gotradie/15min"} />
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <FeatureAnimationOne
            backgroundOne={animationImageOne}
            backgroundTwo={animationImageTwo}
          />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroTwoColumn

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  //background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 60px 0px 180px 0px;
  display: grid;
  gap: 0px;
  grid-template-columns: auto 588px;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 100px 20px 0px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 60px;
    padding: 64px 20px 0px;
  }
`

const ImageWrapper = styled.div`
  max-width: 588px;
  height: 359px;
  position: relative;
`

const TextWrapper = styled.div`
  max-width: 600px;
  display: grid;
  padding-top: 100px;
  gap: 32px;

  @media (max-width: 480px) {
    max-width: 345px;
    -webkit-box-pack: center;
    display: grid;
    grid-template-columns: 330px;
    gap: 30px;
    justify-content: center;
    text-align: center;
    padding: 0px 8px;
}
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
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 2px;

  @media (max-width: 480px) {
    text-align: left;
  }
`

const Title = styled(H1)`
font-size:62px;
line-height: 64px;
  color: ${themes.dark.text1};
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  

  @media (max-width: 480px) {
    font-size: 40px;
    line-height: 45px;
    text-align: left;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};

  @media (max-width: 480px) {
    text-align: left;
  }
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
    columns: 2 auto;
    grid-template-columns: repeat(2,auto);

  @media (max-width: 1354px) {
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
    gap: 16px;
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
