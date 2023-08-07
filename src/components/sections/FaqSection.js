// FaqSection.js

import React from "react";
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H2, MediumText } from "../styles/TextStyles"
import Accordion from "../layout/Accordion";
import { questionsData } from "../../data/questionData";

export default function FaqSection() {
  return (
    <ContentWrapper>
        <TextWrapper>
          <Title>Frequently Asked <span>Questions</span></Title>
        </TextWrapper>
      {questionsData.map((item, index) => (
        <Accordion key={index} question={item.question} answer={item.answer} isOpen={item.open} // Pass the 'open' property to the Accordion component
        />
      ))}
    </ContentWrapper>
  );
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 60px 0px 60px 0px;
  max-width: 954px;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    max-width: 768px;
    gap: 60px;
    padding: 60px 20px 60px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 60px;
    padding: 60px 20px 0px;
    justify-content: center;
  }
`

const TextWrapper = styled.div`
  max-width: 954px;
  display: grid;
  padding-top: 60px;
  padding-bottom: 45px;
  gap: 32px;
  margin: auto;

  @media (max-width: 1354px) {
    padding-bottom: 45px;
    max-width: 588px;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    padding-top: 24px;
    padding-bottom: 45px;
    justify-content: center;
    text-align: center;
  }

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H2)`
  color: ${themes.dark.text1};
  text-align: center;
  span {
    background: linear-gradient(90deg, #54C5C0 0%, #789BB6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    text-align: center;
  }
`