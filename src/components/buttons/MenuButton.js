import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MenuButton(props) {
  const { item } = props
  return (
    <Link to={`${item.nav}`} onClick={props.onClick}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  align-items: center;
  margin-right: ${props => (props.title ? "10px" : "5px")};
  padding: ${props => (props.title ? "10px" : "0px")};
  border-radius: 10px;
  transition: 0.5s ease-out;

  img {
    display: ${props => (props.title ? "none" : "block")};
    width: 98px;
    height: 33px;
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
