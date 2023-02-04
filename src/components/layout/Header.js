import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Header() {

  return (
    <HeaderWrapper>
      <InnerWrapper>
      <Link to="/">
        <Logo>
          <img src="/images/logos/gt-logo.svg" alt="GoTradie" />
        </Logo>
      </Link>
        <Container>
          <Download>
            <FreeText><a
                href="https://app.gotradie.com.au/signup"
                target="_blank"
                rel="noreferrer"
              >Create account</a></FreeText>
            <FreeText><a
                href="https://app.gotradie.com.au/login"
                target="_blank"
                rel="noreferrer"
              >Log in</a></FreeText>          
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
      </InnerWrapper>
    </HeaderWrapper>
  )
}

const FreeText = styled.div`
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding-right: 24px;

  @media (max-width: 450px) {
    padding-right: 0px;
  }
`

const Download = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  @media (max-width: 480px) {
display: inline-flex;
    flex-wrap: wrap;
    gap: 24px;
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
  @media (max-width: 450px) {
    display: none;
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
  @media (max-width: 450px) {
    padding: 24px 0 24px 0;
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
    position: absolute;
    top: 0px;
    width: 100%;
    display: block;
    height: auto;
    z-index: 1111111;
  }
`
const InnerWrapper = styled.div`
  width: 1234px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1345px) {
    width: 90%;
    margin: auto;
    position: absolute;
    top: 30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 10;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin: auto;
    position: absolute;
    top: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
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

 
  @media (max-width: 1345px) {
  }
  @media (max-width: 450px) {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: end;
    justify-content: center;
  }
  
`