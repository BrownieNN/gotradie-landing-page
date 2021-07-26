import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function Footer() {
  return (
    <Wrapper>
      <img src="/images/logos/gt-logo.svg" alt="GoTradie" />
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.nav === "/" ? (
            <MenuButton item={item} key={index} />
          ) : (
            <MenuButton key={index} item={item} />
          )
        )}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 30px 100px;
  align-items: center;

  @media (max-width: 1345px) {
    display: grid;
  }
  @media (max-width: 450px) {
    display: grid;
    padding: 60px 100px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 1345px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
