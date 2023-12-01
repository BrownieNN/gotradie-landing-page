import React from "react"
import styled from "styled-components"
import { SmallText } from "../styles/TextStyles"

export default function CarouselButton(props) {
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
  position: relative;
  background: #e1e9ef;
  border-radius: 8px;
  padding: 16px 13px;
  width: 145px;
  height: 131px;

  img {
    position: absolute;
    top: 16px;
    right: 24px;
    width: 20px;
    height: 20px;
  }
`

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
