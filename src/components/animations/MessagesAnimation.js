import React from "react"
import styled from "styled-components"

export default function MessagesAnimation() {
  return (
    <Wrapper>
      <div className="mockup1" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 1234px;

  @media (max-width: 1354px) {
    transform-origin: center;
    width: 588px;
  }

  @media (max-width: 450px) {
    transform-origin: center;
    width: 375px;
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

  .mockup1 {
    position: absolute;
    width: 1196px;
    height: 463px;
    left: 0px;
    top: 0px;
    background: url("/images/animations/messages.svg") no-repeat center;
    background-size: contain;

    @media (max-width: 450px) {
      background: url("/images/animations/messages-mobile.svg") no-repeat center;
      transform: scale(1) !important;
      width: 375px;
      height: 342px;
    }

    @media (max-width: 1354px) {
      background: url("/images/animations/messages-mobile.svg") no-repeat center;
      transform: scale(1.8);
      transform-origin: left top;
      width: 375px;
    }
  }
`
