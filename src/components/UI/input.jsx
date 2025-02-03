import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StyledInput {...props}></StyledInput>;
};

const StyledInput = styled.input`
  outline: none;
  border: 1px solid gainsboro;
  border-radius: 8px;
  padding: 8px 12px;
`;

export default Input;
