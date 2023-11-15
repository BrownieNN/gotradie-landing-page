import React from "react"
import styled from "styled-components"

export default function FeatureAnimationOne(props) {
  const { backgroundOne, backgroundTwo } = props
  return (
    <Wrapper>
      <BackgroundImageOne backgroundOne={backgroundOne} />
      <BackgroundImageTwo backgroundTwo={backgroundTwo} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 558px;

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  /* :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    &.mockup2 {
      transition-delay: 0.2s;
      transform: translate(0px, -30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  } */
`

const BackgroundImageOne = styled.div`
  position: absolute;
  width: 413px;
  height: 574px;
  left: 100px;
  top: 0px;
  background: ${props => `url(${props.backgroundOne}) no-repeat top center`};
  background-size: contain;

  @media (max-width: 1024px) {
    width: 315px;
    left: 120px;
    top: 0px;
  }

  @media (max-width: 480px) {
    width: 230px;
    left: 0px;
    top: 0px;
  }
`

const BackgroundImageTwo = styled.div`
  position: absolute;
  width: 272px;
  height: 550px;
  left: 330px;
  top: 78px;
  background: ${props => `url(${props.backgroundTwo}) no-repeat top center`};
  background-size: contain;

  @media (max-width: 1024px) {
    width: 204px;
    left: 390px;
    top: 0px;
  }

  @media (max-width: 480px) {
    width: 177px;
    height: 400px;
    top: 20px;
    left: 160px;
  }
`
