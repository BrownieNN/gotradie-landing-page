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

  @media (max-width: 1024px) {
    width: 558px;
    height: 558px;
    left: 0px;
    top: 50px;
  }


  @media (max-width: 480px) {
    width: 338px;
    top: 0;
    left: 0;
  }
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

  @media (max-width: 1024px) {
    width: 148px;
    height: 297px;
    left: 410px;
    top: 116px;
  }

  @media (max-width: 480px) {
    height: 228px;
    top: 120px;
    left: 203px;
  }
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

  @media (max-width: 1024px) {
    width: 237px;
    height: 151px;
    left: -28px;
    top: 3px;
  }

  @media (max-width: 480px) {
    width: 208px;
    top: 200px;
    left: 10px;
  }
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

  @media (max-width: 1024px) {
    width: 242px;
    height: 109px;
    left: 366px;
    top: 41px;
  }

  @media (max-width: 480px) {
    width: 168px;
    top: 90px;
    left: 140px;
  }
`