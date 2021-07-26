import React from "react"
import styled from "styled-components"
import PurchaseButton from "../buttons/PurchaseButton"
import { H3, SmallText } from "../styles/TextStyles"

export default function PanelSection() {
  return (
    <Wrapper>
      <PanelWrapper>
        <ContentWrapper>
          <Profile>
            <img src="/images/avatars/adam.png" alt="adam" />
          </Profile>
          <TextWrapper>
            <Title>Schedule a demo with Adam</Title>
            <Subtitle>
              GoTradie and is more than happy to run you through the ins and out
            </Subtitle>
          </TextWrapper>
          <ButtonGroup>
            <PurchaseButton title="Schedule now" className="button" />
          </ButtonGroup>
        </ContentWrapper>
      </PanelWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1234px;
  padding: 80px 0px 80px 0px;
  margin: auto;

  @media (max-width: 1354px) {
    max-width: 588px;
    grid-template-columns: auto;
    gap: 24px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 375px;
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
    grid-template-columns: 375px;
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
  display: grid;
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
