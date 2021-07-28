import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ButtonText } from "../styles/TextStyles"

export default function SecondaryButton(props) {
  const { title } = props
  return (
    <Wrapper onClick={props.onClick}>
      <TextWrapper>
        <Title>{title || "Get pro access"}</Title>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  background: rgba(15, 32, 40, 0);
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); */
  border-radius: 8px;
  width: 250px;
  height: 52px;
  border: 2px solid rgba(84, 197, 192, 1);
  padding: 16px 24px;
  text-align: center;
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
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(ButtonText)`
  color: #54c5c0; ;
`
