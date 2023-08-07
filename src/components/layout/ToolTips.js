import React from "react";
import styled from "styled-components";

export default function Tooltip({ isVisible, content, position, onClose, highlight }) {
  if (!isVisible) {
    return null;
  }

  return (
    <TooltipWrapper position={position}>
      <CloseIcon highlight={highlight} onClick={onClose}><h6>X</h6></CloseIcon>
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


const CloseIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  color: #789BB6;
  font-size: 10px;
  font-weight: bold;
  z-index: 9999999;
  border-radius: 100px;
  justify-content: center;
  display: flex;
  text-align: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border: 1.289px solid var(--slate, #789BB6);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 21.918838500976562px 25.7868709564209px -16.76146697998047px rgba(0, 0, 0, 0.00);
  backdrop-filter: blur(3.2233588695526123px);

  /* Position adjustment for highlighted column */
  ${(props) =>
    props.highlight &&
    `
    top: 24px;
    right: 8px;
  `}

`;