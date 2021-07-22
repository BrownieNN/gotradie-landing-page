import React from "react"
import styled from "styled-components"

export default function FeatureAnimationTwo(props) {
  const {
    backgroundOne,
    backgroundTwo,
    backgroundThree,
    backgroundFour,
    backgroundFive,
  } = props
  return (
    <Wrapper>
      <BackgroundImageOne backgroundOne={backgroundOne} />
      <BackgroundImageTwo backgroundTwo={backgroundTwo} />
      <BackgroundImageThree backgroundThree={backgroundThree} />
      <BackgroundImageFour backgroundFour={backgroundFour} />
      <BackgroundImageFive backgroundFive={backgroundFive} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 558px;
  height: auto;

  @media (max-width: 1354px) {
    transform: scale(0.9);
    transform-origin: top left;
  }

  @media (max-width: 450px) {
    transform: scale(0.57) translateY(950px);
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
  width: 404px;
  height: 496px;
  left: 38px;
  top: 55px;
  background: ${props => `url(${props.backgroundOne}) no-repeat top center`};
  background-size: cover;
`
/*Services*/
const BackgroundImageTwo = styled.div`
  position: absolute;
  width: 343px;
  height: 130px;
  left: 0px;
  top: 4px;
  background: ${props => `url(${props.backgroundTwo}) no-repeat top center`};
  background-size: cover;
`
/*Calendar*/
const BackgroundImageThree = styled.div`
  position: absolute;
  width: 243.61px;
  height: 213px;
  left: 323px;
  top: 168px;
  background: ${props => `url(${props.backgroundThree}) no-repeat top center`};
  background-size: cover;
`
/*Areas*/
const BackgroundImageFour = styled.div`
  position: absolute;
  width: 215px;
  height: 169px;
  left: 300px;
  top: 434px;
  background: ${props => `url(${props.backgroundFour}) no-repeat top center`};
  background-size: cover;
`
/*Licence*/
const BackgroundImageFive = styled.div`
  position: absolute;
  width: 257.36px;
  height: 165.82px;
  left: 0px;
  top: 465px;
  background: ${props => `url(${props.backgroundFive}) no-repeat top center`};
  background-size: cover;
`
