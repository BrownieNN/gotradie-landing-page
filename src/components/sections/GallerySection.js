import React, { useState } from "react"
import styled from "styled-components"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

const Worksites = {
  Garside: {
    img: "/images/worksites/worksite1.png",
  },
  OakandOcean: {
    img: "/images/shots/hero-shot2.png",
  },
}

export default function GallerySection() {
  const [selectedWorksites, setSelectedWorksites] = useState(Worksites.Garside)

  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Lockup>
            <Title>See how trades work in GoTradie</Title>
          </Lockup>
          <Description>
            You don’t have to believe us checkout some of the tradies already
            using Gotradie
          </Description>
          <ul>
            <ButtonGroup>
              <PurchaseButton
                title="Garside Electrcial & Solar"
                className={`${
                  selectedWorksites === Worksites.Garside ? "active" : "static"
                }`}
                onClick={() => setSelectedWorksites(Worksites.Garside)}
              />

              <PurchaseButton
                title="Oak & Ocean Building"
                className={`${
                  selectedWorksites === Worksites.OakandOcean
                    ? "active"
                    : "static"
                }`}
                onClick={() => setSelectedWorksites(Worksites.OakandOcean)}
              />
            </ButtonGroup>
          </ul>
        </TextWrapper>
      </ContentWrapper>
      <ImageWrapper>
        {selectedWorksites ? (
          <div>
            <img src={selectedWorksites.img} alt="" />
          </div>
        ) : null}
      </ImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1234px;
  padding: 0px 0px 140px 0px;
  margin: auto;
  display: grid;
  gap: 73px;
  grid-template-columns: 588px auto;

  @media (max-width: 1354px) {
    max-width: 588px;
    grid-template-columns: auto;
    gap: 60px;
    padding: 0px 20px 120px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    grid-template-columns: 345px;
    gap: 60px;
    padding: 0px 20px 110px;
  }
`
const ContentWrapper = styled.div``

const TextWrapper = styled.div`
  max-width: 588px;
  display: grid;
  padding-top: 60px;
  gap: 32px;

  @media (max-width: 480px) {
    max-width: 345px;
    justify-content: center;
    text-align: center;
    padding: 0 8px;
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  font-size: 64px;
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 38px;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
`
const Lockup = styled.div`
  display: grid;
  gap: 10px;

  img {
    width: 476px;
  }

  @media (max-width: 1354px) {
    display: grid;
    gap: 10px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    display: grid;
    gap: 10px;
    justify-content: center;
    text-align: center;
    img {
      width: 307px;
    }
  }
`

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 588px auto;
  img {
    width: 588px;
    height: 628px;
  }
  @media (max-width: 1354px) {
    justify-content: center;
    img {
      width: 588px;
      height: 628px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
    img {
      width: 345px;
      height: auto;
    }
  }
`

const ButtonGroup = styled.div`
  display: grid;
  gap: 16px;

  .static {
    width: 400px;
    background: none;
    border: 2px solid #54c5c0;
  }

  .active {
    width: 400px;
    background: #54c5c0;
    color: white;
  }

  @media (max-width: 1354px) {
    .static {
      width: 400px;
      margin: auto;
    }

    .active {
      margin: auto;
      width: 400px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
    .static {
      margin: auto;
      width: 350px;
    }

    .active {
      margin: auto;
      width: 350px;
    }
  }
`
