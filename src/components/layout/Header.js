import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import ContactForm from "./ContactForm"

export default function Header() {
  const scrollToElement = require("scroll-to-element")

  const handleLinkClick = (e, target) => {
    // NODE-SAFE CODE
    // Gatsby uses Node to generate our pages.
    // Node doesn't know what a window is.
    // Be sure to wrap any of your browser interactions
    // in some sort of node-safe if statement like this:

    if (typeof window !== "undefined") {
      // First, are we on the home page?
      // If so, let's scroll to the desired block,
      // which was passed in as an onClick method on our <Link />.
      // If an event was also passed, we'll preventDefault()

      if (window.location.pathname === "/") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -95, // Offset a fixed header if you please
          duration: 1000,
        })
      }
    }
  }

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
      console.log("Document is clicked")
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Logo>
          <img src="images/logos/gt-logo.svg" alt="GoTradie" />
        </Logo>
        <Container ref={ref}>
          <MenuButton>
            <Link onClick={e => handleLinkClick(e, "#why")} to={"/#why"}>
              Why GoTradie
            </Link>
          </MenuButton>
          <MenuButton>
            <Link
              onClick={e => handleLinkClick(e, "#features")}
              to={"/#features"}
            >
              What's it do
            </Link>
          </MenuButton>
          <MenuButton>
            <Link
              onClick={e => handleLinkClick(e, "#industries")}
              to={"/#industries"}
            >
              Who's it for
            </Link>
          </MenuButton>
          <MenuButton>
            <Link onClick={event => handleClick(event)} to="/">
              Book demo
            </Link>
          </MenuButton>
          <Download>
            <FreeText>Try for free</FreeText>
            <ButtonGroup>
              <a
                href="https://apps.apple.com/au/app/gotradie/id1497078123"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/app/apple-store-badge.svg"
                  alt="Apple Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.gotradie.paleale"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/app/google-play-badge.svg"
                  alt="Google Play Store"
                />
              </a>
            </ButtonGroup>
          </Download>
        </Container>
        <div ref={tooltipRef}>
          <ContactForm isOpen={isOpen} />
        </div>
      </InnerWrapper>
    </HeaderWrapper>
  )
}

const FreeText = styled.div`
  color: white;
  font-weight: 600;
  text-decoration: none;
`

const Download = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  @media (max-width: 480px) {
    display: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 20px;

  img {
    width: 105.1px;
    height: 33.26px;
    margin-right: 16px;
  }
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  img {
    width: 174.88px;
    height: 20px;
  }
`

const HeaderWrapper = styled.div`
  width: 100%;
  margin: auto;
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;

  @media (max-width: 1345px) {
    width: 100%;
    margin: auto;
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    z-index: 10;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin: auto;
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    z-index: 10;
  }
`
const InnerWrapper = styled.div`
  width: 1234px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    width: 100%;
    margin: auto;
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  @media (max-width: 1345px) {
    width: 100%;
    margin: auto;
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 450px) {
  }
  @media (max-width: 1345px) {
    display: none;
  }
`
const MenuButton = styled.div`
  color: white;
  align-items: center;
  margin-right: 16px;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  @media (max-width: 1345px) {
    > a {
      display: none;
    }
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
