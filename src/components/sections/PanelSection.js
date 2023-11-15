import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import PurchaseButton from "../buttons/PurchaseButton"
import { H3, SmallText } from "../styles/TextStyles"
import ContactForm from "../layout/ContactForm"

export default function PanelSection() {
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
      ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      //console.log("Document is clicked")
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
  
  return (
    <Wrapper ref={ref}>
      <PanelWrapper>
        <ContentWrapper>
          {/* <Profile>
            <img src="/images/avatars/adam.png" alt="adam" />
          </Profile> */}
          <TextWrapper>
            <Title>Give it a go & book a demo</Title>
            <Subtitle>
              Say G’day to one of the team, who'll help you take the app for a
              spin.
            </Subtitle>
          </TextWrapper>
          <ButtonGroup>
            <PurchaseButton
              title="Book now"
              className="button"
              onClick={event => handleClick(event)}
            />
          </ButtonGroup>
        </ContentWrapper>
      </PanelWrapper>
      {/* <div ref={tooltipRef}>
        <ContactForm isOpen={isOpen} />
      </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1234px;
  padding: 80px 0px 80px 0px;
  margin: auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1354px) {
    max-width: 588px;
    grid-template-columns: auto;
    gap: 24px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 24px;
  }
`

const PanelWrapper = styled.div`
  max-width: 954px;
  height: auto;
  background: #153549;
  padding: 24px 32px;
  border-radius: 16px;
  margin: auto;

  @media (max-width: 1354px) {
    padding: 45px 45px;
  }

  @media (max-width: 480px) {
    padding: 32px 32px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 42px;
  grid-template-columns: 80px auto 250px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1354px) {
    max-width: 588px;
    grid-template-columns: auto;
    gap: 24px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 24px;
  }
`

const Profile = styled.div`
  width: 80px;
  height: 80px;
  margin: auto;
  img {
    width: 80px;
    height: 80px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  gap: 6px;

  @media (max-width: 1354px) {
    max-width: 588px;
    grid-template-columns: auto;
    margin: auto;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    grid-template-columns: auto;
    margin: auto;
  }
`

const Title = styled(H3)`
  line-height: 30px;
  color: white;
`

const Subtitle = styled(SmallText)`
  color: white;
`

const ButtonGroup = styled.div`
  .button {
    margin: auto;
  }
  @media (max-width: 1354px) {
    .button {
      width: 280px;
      margin: auto;
    }
  }

  @media (max-width: 480px) {
    max-width: 280px;
    grid-template-columns: auto;
    margin: auto;
  }
`
