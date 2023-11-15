import React, { useState } from "react"
import styled from "styled-components"

export default function WorksiteOne(props) {
  const { WorksiteOneisOpen } = props
  return (
    <Wrapper WorksiteOneisOpen={WorksiteOneisOpen}>{WorksiteOneisOpen}</Wrapper>
  )
}

const Wrapper = styled.div`
  width: 588px;
  height: 626px;
  background: url("/images/worksites/worksite1.png") no-repeat;
  background-size: contain;
  opacity: ${props => (props.WorksiteOneisOpen ? 1 : 0)};
  position: absolute;
  transition: 0.3s ease-in-out;
`
