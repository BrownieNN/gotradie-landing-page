//import React, { useEffect, useRef, useState } from "react"
import React from "react"
import styled from "styled-components"
import { logoData } from "../../data/tradeLogos"
import TradeLogoContainer from "../buttons/TradeLogoContainer"

export default function TradeLogo() {
  return (
    <Wrapper>
      <MenuWrapper count={logoData.length}>
        {logoData.map((item, index) => (
          <TradeLogoContainer item={item} key={index} />
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 1234px;
  justify-content: space-between;
  justify-content: center;
  align-items: center;

  @media (max-width: 1345px) {
    width: 100%;
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
  gap: 60px;
  columns: 6 auto;
  grid-template-columns: repeat(6, auto);

  @media (max-width: 1345px) {
    gap: 50px;
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 480px) {
    gap: 30px;
    grid-template-columns: repeat(2, auto);
  }
`
