import React from "react"
import styled from "styled-components"
import { ButtonText } from "../styles/TextStyles"

export default function GetStarted(props) {
  const { title, className } = props
  
  return (
      <Wrapper>
        <TextWrapper>
          <Title>{title || "Download"}</Title>
        </TextWrapper>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    padding: 16px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 9px;
    border-radius: 8px;
    background: var(--hi-vis, #54C5C0);
    cursor: pointer;

  @media (max-width: 1354px) {
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 24px;

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
    color: var(--white, #FFF);
    font-size: 13px;
    font-family: Montserrat;
    letter-spacing: 1px;
    font-weight: bold !important;
    text-transform: uppercase;
`