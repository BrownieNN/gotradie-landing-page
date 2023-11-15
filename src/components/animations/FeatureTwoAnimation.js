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
  background-size: contain;
  overflow: visible;

  @media (max-width: 1024px) {
    width: 404px;
    height: 496px;
    left: 158px;
    top: 55px;
  }

  @media (max-width: 480px) {
    width: 264px;
    height: 496px;
    left: 30px;
    top: 70px;
  }
`
/*Services*/
const BackgroundImageTwo = styled.div`
  position: absolute;
  width: 343px;
  height: 130px;
  left: 0px;
  top: 4px;
  background: ${props => `url(${props.backgroundTwo}) no-repeat top center`};
  background-size: contain;
  overflow: visible;

  @media (max-width: 480px) {
    width: 263px;
    height: 130px;
    left: 0px;
    top: 34px;
  }
  
`
/*Calendar*/
const BackgroundImageThree = styled.div`
  position: absolute;
  width: 293.61px;
  height: 213px;
  left: 253px;
  top: 168px;
  background: ${props => `url(${props.backgroundThree}) no-repeat top center`};
  background-size: contain;

  @media (max-width: 1024px) {
    width: 293.61px;
    height: 273px;
    left: 453px;
    top: 168px;
  }

  @media (max-width: 480px) {
    width: 293.61px;
    height: 183px;
    left: 110px;
    top: 148px;
}
  }
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
  overflow: visible;
`
/*Licence*/
const BackgroundImageFive = styled.div`
  position: absolute;
  width: 287.36px;
  height: 175.82px;
  left: 0px;
  top: 405px;
  background: ${props => `url(${props.backgroundFive}) no-repeat top center`};
  background-size: contain;
  overflow: visible;
  
  @media (max-width: 1024px) {
    width: 287.36px;
    height: 175.82px;
    left: 0px;
    top: 335px;
  }

  @media (max-width: 480px) {
    width: 177px;
    height: 400px;
    top: 360px;
    left: 0;
  }
`
