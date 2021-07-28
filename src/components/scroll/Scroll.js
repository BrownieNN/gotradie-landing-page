import React from "react"
import styled from "styled-components"
import { SmallText } from "../styles/TextStyles"

function ScrollIndicator() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Explore more</Title>
        <IconWrapper>
          <img src="/images/icons/arrow-down.svg" alt="" />
        </IconWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ScrollIndicator

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  display: grid;
  gap: 10px;
  justify-content: center;

  @media (max-width: 1354px) {
    grid-template-columns: auto;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 10px;
    padding: 0px 20px;
  }
`

const IconWrapper = styled.div`
  display: grid;
  justify-content: center;
`

const Title = styled(SmallText)`
  color: white;
`
