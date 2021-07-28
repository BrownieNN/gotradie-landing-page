import React, { createRef, useEffect } from "react"
import { themes } from "../styles/ColorStyles"
import styled, { keyframes } from "styled-components"
import { H1, BodyIntro } from "../styles/TextStyles"
import lottie from "lottie-web"
import animationData from "../animations/lottie/messages.json"

function HeroAnimation() {
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

  return (
    <Wrapper id="why">
      <ContentWrapper>
        <TextWrapper>
          <Subtitle>What is GoTradie?</Subtitle>
          <Title>Every ping, swoosh, ding all in one place</Title>
        </TextWrapper>
        <AnimationWrapper>
          <Animation ref={animationContainer} />
        </AnimationWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroAnimation

const AnimationWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  @media (max-width: 480px) {
    max-width: 345px;
  }
`

const Animation = styled.div`
  max-width: 1234px;
  height: auto;
  @media (max-width: 480px) {
    max-width: 345px;
  }
`

const Wrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  display: grid;
  gap: 64px;
  grid-template-columns: auto;
  @media (max-width: 480px) {
    max-width: 345px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 80px 0px 120px 0px;
  display: grid;
  gap: 60px;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    gap: 60px;
    justify-content: center;
    padding: 80px 0px 750px 0px;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    padding: 80px 0px 120px 0px;
    gap: 40px;
  }
`

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const TextWrapper = styled.div`
  max-width: 588px;
  display: grid;
  padding-top: 60px;
  gap: 32px;

  @media (max-width: 480px) {
    max-width: 345px;
    justify-content: center;
    text-align: center;
    padding: 0 8px;
    display: grid;
    gap: 20px;
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

const Subtitle = styled(BodyIntro)`
  color: ${themes.dark.text1};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
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
    font-size: 42px;
  }
`
