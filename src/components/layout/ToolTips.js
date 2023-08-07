import React from "react";
import styled from "styled-components";

export default function Tooltip({ isVisible, content, position }) {
  if (!isVisible) {
    return null;
  }

  return (
    <TooltipWrapper position={position}>
      <TooltipContent>{content}</TooltipContent>
    </TooltipWrapper>
  );
}

const TooltipWrapper = styled.div`
  position: absolute;
  top: 312px;
  color: #fff;
  border-radius: 4px;
  padding: 8px;
  z-index: 1000;
  width: 227px;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.7);
`;

const TooltipContent = styled.div``;
