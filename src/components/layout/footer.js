import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import { SmallText2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"


export default function Footer() {
  return (
    <Wrapper>
    <LogoWrapper><img src="/images/logos/gt-logo.svg" alt="GoTradie" /></LogoWrapper>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.nav === "/" ? (
            <MenuButton item={item} key={index} />
          ) : (
            <MenuButton key={index} item={item} />
          )
        )}
      </MenuWrapper>
      <FooterText>©2021 GoTradie Holdings PTY LTD<br/><a href="mailto:info@gotradie.com.au" target="_blank">Contact Us</a></FooterText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 30px 80px;
  align-items: center;

  @media (max-width: 1345px) {
    display: grid;
    justify-content: center;
    grid-template-columns: auto;
    padding: 60px 80px;
  }
  @media (max-width: 450px) {
    display: grid;
    justify-content: center;
    grid-template-columns: auto;
    display: grid;
    padding: 60px 60px;
  }
`

const LogoWrapper = styled.div`
width: 100%;
padding-bottom: 16px;
img{
  display: block;
  margin: auto;
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

 const FooterText = styled(SmallText2)`
  color: #789BB6;
  text-align: center;
  letter-spacing: 1px;
  line-height: 16px;
  width: 345px;
    text-align: left;

    @media (max-width: 1345px) {
      text-align: center;
  }
  @media (max-width: 450px) {
    text-align: center;
  }
 `
