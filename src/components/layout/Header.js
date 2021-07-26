import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function Header() {
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
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", nav: "/" }}
          />
        </HamburgerWrapper>
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0px 100px;
  align-items: center;

  @media (max-width: 1345px) {
    top: 30px;
    padding: 0px 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
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

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 1345px) {
    display: block;
  }
`
