import React from "react";
import styled from "styled-components";

function DropdownLink({ title, icon }) {
  return (
    <DropdownLinkWrapper>
      <Icon src={icon} alt={title} />
      <Title>{title}</Title>
    </DropdownLinkWrapper>
  );
}

export default DropdownLink;

const DropdownLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Title = styled.span`
  font-size: 14px;
  color: #333;
`;
