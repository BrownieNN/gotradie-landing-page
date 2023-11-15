import React from "react";
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { Caption2 } from "../styles/TextStyles"

export default function FourColumnSection() {
  return (
    <SectionWrapper>
      <Column>
        <IconWrapper>
          <img src="/images/icons/chat.svg" />
        </IconWrapper>
        <Text>Chat</Text>
      </Column>
      <Column>
        <IconWrapper>
          <img src="/images/icons/thumbs-up.svg" />
        </IconWrapper>
        <Text>Tasks</Text>
      </Column>
      <Column>
        <IconWrapper>
          <img src="/images/icons/gallery.svg" />
        </IconWrapper>
        <Text>Photos</Text>
      </Column>
      <Column>
        <IconWrapper>
          <img src="/images/icons/search.svg" />
        </IconWrapper>
        <Text>Find</Text>
      </Column>
    </SectionWrapper>
  );
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
  justify-items: center;
  width: 70%;
  margin: 0 auto;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;
  }

  :nth-child(1) {
    animation-delay: 0s;
  }
  :nth-child(2) {
    animation-delay: 0.2s;
  }
  :nth-child(3) {
    animation-delay: 0.4s;
  }
  :nth-child(4) {
    animation-delay: 0.6s;
  }

  @media (max-width: 1354px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    padding: 16px 0px;
  }
`;

const Column = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  display: flex; /* Use flexbox */
  align-items: center; /* Vertically center the items */
  justify-content: center; /* Horizontally center the items */
  position: relative;
  background: rgba(255, 255, 255, 0.2);
      // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.4);
  

  img{
    width: 32px;
    height: 32px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 54px;
    height: 54px;

    img{
      width: 24px;
      height: 24px;
      height: auto;
    }
  }
`;

const Text = styled(Caption2)`
  color: ${themes.dark.text1};
  margin-top: 16px;
  font-size: 12px;
`;
