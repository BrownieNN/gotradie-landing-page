//import React, { useEffect, useRef, useState } from "react"
import React from "react"
import styled from "styled-components"
import FacebookButton from "../buttons/FacebookButton"
import InstagramButton from "../buttons/InstagramButton"
import { MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function SocialLayout() {
  return (
    <Wrapper>
      <Description>
      Join the conversation and keep up to date with all things tradie
      </Description>
      
      <MenuWrapper>
      <a href="https://www.facebook.com/groups/263738870748979" target="_blank" rel="noreferrer" >
       <FacebookButton title="Facebook" />
       </a>
       <a href="https://www.instagram.com/gotradie/" target="_blank" rel="noreferrer" >
       <InstagramButton title="Instagram" />
       </a>
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  margin: auto;
  gap: 20px;

  @media (max-width: 1345px) {
    width: 588px;
    top: 30px;
    padding: 0px 30px;
  }
  @media (max-width: 450px) {
    width: 345px;
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 20px;
  columns: 2 auto;
  grid-template-columns: repeat(2, auto);

  @media (max-width: 1345px) {
    gap: 20px;
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 480px) {
    gap: 20px;
    grid-template-columns: repeat(1, auto);
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  text-align: center;
  padding-top: 50px;
`
