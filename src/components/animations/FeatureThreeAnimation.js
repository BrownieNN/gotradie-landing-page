import React from "react"
import styled from "styled-components"

export default function FeatureAnimationThree(props) {
  const {
    backgroundOne,
    backgroundTwo,
    backgroundThree,
    backgroundFour,
  } = props
  return (
    <Wrapper>
      <BackgroundImageOne backgroundOne={backgroundOne} />
      <BackgroundImageTwo backgroundTwo={backgroundTwo} />
      <BackgroundImageThree backgroundThree={backgroundThree} />
      <BackgroundImageFour backgroundFour={backgroundFour} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 558px;
  height: auto;

  @media (max-width: 1354px) {
    transform: scale(0.9) translateX(40px) translateY(700px);
    transform-origin: top left;
  }

  @media (max-width: 450px) {
    transform: scale(0.58) translateX(10px) translateY(1300px);
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
/*Image*/
const BackgroundImageOne = styled.div`
  position: absolute;
  width: 558px;
  height: 558px;
  left: 0pc;
  top: 150px;
  background: ${props => `url(${props.backgroundOne}) no-repeat top center`};
  background-size: contain;
  overflow: visible;
`
/*Services*/
const BackgroundImageTwo = styled.div`
  position: absolute;
  width: 148px;
  height: 297px;
  left: 410px;
  top:196px;
  background: ${props => `url(${props.backgroundTwo}) no-repeat top center`};
  background-size: contain;
  overflow: visible;
`

const BackgroundImageThree = styled.div`
  position: absolute;
  width: 237px;
  height: 151px;
  left: 312px;
  top: 23px;
  background: ${props => `url(${props.backgroundThree}) no-repeat top center`};
  background-size: contain;
  overflow: visible;
`

const BackgroundImageFour = styled.div`
  position: absolute;
  width: 242px;
  height: 109px;
  left: 26px;
  top: 61px;
  background: ${props => `url(${props.backgroundFour}) no-repeat top center`};
  background-size: contain;
  overflow: visible;
`