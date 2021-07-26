import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { SmallText2 } from "../styles/TextStyles"

export default function Losenge(props) {
  const { tagTitle, icon } = props
  return (
    <Link to="/page-2">
      <Wrapper>
        <TextWrapper>
          <Title>{tagTitle}</Title>
        </TextWrapper>
        <IconWrapper>
          <img src={icon} alt={tagTitle} />
        </IconWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  background: #153549;
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); */
  border-radius: 100px;
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: auto 15px;
  padding: 12px 16px 12px 16px;
  text-align: left;
  align-items: center;
  gap: 16px;
  justify-content: center;
  margin-right: 10px;
  margin-top: 10px;
  /* transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); */

  @media (max-width: 480px) {
    width: 200px;
  }

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); */
    transform: translateY(-3px);

    .icon {
      transform: translateX(1px);
    }
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(SmallText2)`
  color: white;
`

const IconWrapper = styled.div`
  width: 15px;
  height: 15px;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    /* filter: hue-rotate(10deg) brightness(150%) saturate(120%); */
  }
`
