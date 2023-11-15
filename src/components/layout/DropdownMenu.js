// Inside DropdownMenu.js

import React from "react";
import styled from "styled-components";
import { whoMenuData } from "../../data/menuData";
import { Link } from "gatsby";

const DropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: 200px; /* Adjust the width as needed */
  z-index: 999999999999999999;
`;

const DropdownItem = styled(Link)`
  color: white;
  display: block;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default function DropdownMenu() {
  return (
    <DropdownWrapper>
      {whoMenuData.map((dropdownItem, index) => (
        <DropdownItem key={index} to={dropdownItem.link}>
          {dropdownItem.title}
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
}
