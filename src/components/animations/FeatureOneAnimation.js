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

  @media (max-width: 1354px) {
    transform: scale(0.9) translateY(620px);
    transform-origin: top left;
  }

  @media (max-width: 450px) {
    transform: scale(0.57) translateY(1000px);
  }

  /* div {
    transform: rotateY(-20deg) rotateX(20deg);
    perspective-origin: bottom left;
  } */

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
  left: 30px;
  top: 50px;
  background: ${props => `url(${props.backgroundOne}) no-repeat top center`};
  background-size: contain;
`

const BackgroundImageTwo = styled.div`
  position: absolute;
  width: 272px;
  height: 550px;
  left: 340px;
  top: 78px;
  background: ${props => `url(${props.backgroundTwo}) no-repeat top center`};
  background-size: contain;
`
