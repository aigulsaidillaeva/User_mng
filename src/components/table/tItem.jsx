import React, { Fragment } from "react";
import Button from "../UI/Button";
import styled from "styled-components";

const TItem = (props) => {
  const { id, user, password, email } = props;
  return (
    <StyledTr>
      <StyledTd>{id}</StyledTd>
      <StyledTd>{user}</StyledTd>
      <StyledTd>{password}</StyledTd>
      <StyledTd>{email}</StyledTd>
      <StyledTd>
        <Button title="view" variant="secondary" />
      </StyledTd>
      <StyledTd>
        <Button title="delete" variant="warning" />
      </StyledTd>
    </StyledTr>
  );
};
const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: grey;
  }

  padding: 20px;
`;
const StyledTd = styled.td`
  text-align: center;
`;

export default TItem;
