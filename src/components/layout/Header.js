import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
    // console.log(event)
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      // console.log("Document is clicked")
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);
  

  // Filter the menuData array to exclude "Careers" option in the header
  const headerMenuData = menuData.filter(item => item.showInHeader !== false);

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/gt-logo.svg" alt="Logo" />
      </Link>
      <MenuWrapper count={headerMenuData.length} ref={ref}>
        {headerMenuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 24px 110px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 16px; 30px;
  }
  @media (max-width: 450px) {
    padding: 16px 24px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HamburgerWrapper = styled.div`
  display: none;
  background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.4);
  border-radius: 8px;

  @media (max-width: 768px) {
    display: block;
  }
`
