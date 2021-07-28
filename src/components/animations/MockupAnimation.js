import React from "react"
import styled from "styled-components"

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup1" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 558px;

  @media (max-width: 768px) {
    transform: scale(0.9);
    transform-origin: top left;
  }

  @media (max-width: 450px) {
    transform: scale(0.57);
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
    width: 413px;
    height: 574px;
    left: 190px;
    top: 40px;
    background: url("/images/shots/hero-shot1.png") no-repeat;
    background-size: contain;
  }
`
