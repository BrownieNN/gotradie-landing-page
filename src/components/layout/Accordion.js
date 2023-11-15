// Accordion.js

import React, { useState } from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles"
import { H2, MediumText } from "../styles/TextStyles"

export default function Accordion({ question, answer, isOpen }) {
    const [isOpenState, setIsOpen] = useState(isOpen);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpenState);
    };
  
    return (
      <AccordionWrapper>
        <AccordionHeader onClick={toggleAccordion}>
          <Question>{question}</Question>
          <ToggleIcon isOpen={isOpenState}>
            <img src="/images/icons/arrow down.svg" />
          </ToggleIcon>
        </AccordionHeader>
        {isOpenState && <Answer>{answer}</Answer>}
      </AccordionWrapper>
    );
  }

const AccordionWrapper = styled.div`
  padding-bottom: 16px;
  border-bottom: 0.5px solid #789BB6;
  margin-bottom: 32px;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Question = styled(MediumText)`
  color: ${themes.dark.text1};
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  flex: 1;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

const ToggleIcon = styled.span`
  font-size: 24px;
  transform: ${props => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease-in-out;
  color: #FFFFFF;

  img{
    width: 16px;
    height: 16px;
  }
`;

const Answer = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #FFFFFF;
  text-align: left;


  @media (max-width: 480px) {
    text-align: left;
  }
`;
