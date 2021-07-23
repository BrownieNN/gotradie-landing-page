//import React, { useEffect, useRef, useState } from "react"
import React from "react"
import styled from "styled-components"
import { tradeData } from "../../data/tradeData"
import TradeType from "../buttons/TradeType"

export default function TradeGrid() {
  //   const [isOpen, setIsOpen] = useState(false)

  //   const ref = useRef()

  //   const tooltipRef = useRef()

  //   function handleClick(event) {
  //     setIsOpen(!isOpen)
  //     event.preventDefault()
  //   }

  //   function handleClickOutside(event) {
  //     if (
  //       ref.current &&
  //       !ref.current.contains(event.target) &&
  //       !tooltipRef.current.contains(event.target)
  //     ) {
  //       //console.log("Document clicked")
  //       setIsOpen(false)
  //     }
  //   }

  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside)

  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside)
  //     }
  //   }, [])

  return (
    <Wrapper>
      <MenuWrapper count={tradeData.length}>
        {tradeData.map((item, index) => (
          <TradeType item={item} key={index} />
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

  @media (max-width: 1345px) {
    width: 588px;
    top: 30px;
    padding: 0px 30px;
  }
  @media (max-width: 450px) {
    width: 375px;
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 10px;
  columns: 6 auto;
  grid-template-columns: repeat(6, auto);

  @media (max-width: 1345px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, auto);
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 1345px) {
    display: block;
  }
`
