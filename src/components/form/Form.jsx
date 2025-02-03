import React from "react";
import Input from "../UI/input";
import styled from "styled-components";

const Form = (props) => {
  return (
    <StyledForm>
      <StyledBox>
        <Input type="email" placeholdor="Write your email" />
      </StyledBox>
      <StyledBox>
        <Input type="password" placeholdor="Write your password" />
      </StyledBox>
      <StyledBox>
        <Input type="text" placeholdor="Write your text" />
      </StyledBox>
    </StyledForm>
  );
};
const StyledForm = styled.form``;
const StyledBox = styled.div`
  margin-bottom: 15px;
`;

export default Form;
