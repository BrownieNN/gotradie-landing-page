import React from "react"
import styled from "styled-components"
import { SmallText } from "../styles/TextStyles"

export default function TradeLogoContainer(props) {
  const { item } = props
  return (
    <TradeTile title={item.tile}>
      <img src={item.icon} alt={item.title} />
      <TextWrapper>
        <TradeTitle>{item.title}</TradeTitle>
      </TextWrapper>
    </TradeTile>
  )
}

const TradeTile = styled.div`
  display: flex; /* Use flexbox */
  align-items: center; /* Vertically center the items */
  justify-content: center; /* Horizontally center the items */
  position: relative;
  width: 150px;
  height: 113px;

  img {
    width: 100%;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 76px;
  height: auto;
  left: 17px;
  bottom: 15px;
`

const TradeTitle = styled(SmallText)`
  color: #153549;
  text-transform: lowercase;
  font-weight: 600;
`