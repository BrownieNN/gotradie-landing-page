import React from "react"
import styled from "styled-components"
import { ButtonText } from "../styles/TextStyles"

export default function PurchaseButton(props) {
  const { title, className } = props
  return (
    <Wrapper className={className} onClick={props.onClick}>
      <TextWrapper>
        <Title>{title || "Download"}</Title>
      </TextWrapper>
      <IconWrapper>
        <img src="/images/icons/arrow-left.svg" alt={title} />
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  background: #54c5c0;
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); */
  border-radius: 8px;
  width: 250px;
  height: 52px;
  display: grid;
  grid-template-columns: auto 18px;
  padding: 16px 24px;
  text-align: left;
  align-items: center;
  gap: 8px;
  justify-content: center;
  /* transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); */

  @media (max-width: 480px) {
    width: 340px;
  }

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); */
    transform: translateY(-3px);

    .icon {
      transform: translateX(1px);
    }
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(ButtonText)`
  color: white;
`

const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    /* filter: hue-rotate(10deg) brightness(150%) saturate(120%); */
  }
`
