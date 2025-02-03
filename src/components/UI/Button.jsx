import React from "react";
import styled, { css } from "styled-components";

const BUTTON_TYPE = {
  default: {
    bg: "#04d275",
    hover: "#26de63",
    active: "#04d275",
  },
  secondary: {
    bg: "blue",
    hover: "#050550",
    active: "#1d1dc0",
  },
  warning: {
    bg: "red",
    hover: "#e81a1a",
    active: "#c01d1d",
  },
};

const getButtonStyles = (props) => {
  return css`
    border: none;
    background-color: ${BUTTON_TYPE[props.variant].bg};
    color: white;
    border-radius: 8px;
    padding: 8px 12px;
    &:hover {
      background-color: ${BUTTON_TYPE[props.variant].hover};
    }
    &:active {
      background-color: ${BUTTON_TYPE[props.variant].active};
    }
    cursor: pointer;
    font-weight: 700;
  `;
};

const Button = (props) => {
  const { title, variant, ...rest } = props;
  return (
    <StyledButton variant={variant} {...rest}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${getButtonStyles}
`;
export default Button;
