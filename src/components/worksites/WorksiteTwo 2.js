import React, { useState } from "react"
import styled from "styled-components"

export default function WorksiteTwo(props) {
  const { WorksiteTwoisOpen } = props
  return (
    <Wrapper WorksiteTwoisOpen={WorksiteTwoisOpen}>{WorksiteTwoisOpen}</Wrapper>
  )
}

const Wrapper = styled.div`
  width: 588px;
  height: 626px;
  background: url("/images/shots/hero-shot1.png") no-repeat;
  background-size: contain;
  opacity: ${props => (props.WorksiteTwoisOpen ? 1 : 0)};
  position: absolute;
  transition: 0.3s ease-in-out;
`
