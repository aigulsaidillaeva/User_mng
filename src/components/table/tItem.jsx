import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const TItem = (props) => {
  const { id, user, password, email, count, onDelete, onView } = props;
  return (
    //поля там где заполняются данные юзера
    <StyledTr>
      <StyledTd>{count}</StyledTd>
      <StyledTd>{user}</StyledTd>
      <StyledTd>{password}</StyledTd>
      <StyledTd>{email}</StyledTd>
      <StyledTd>
        <Button
          title="view"
          variant="secondary"
          onClick={() => onView({ id, user, password, email })}
        />
      </StyledTd>
      <StyledTd>
        <Button
          title="delete"
          variant="warning"
          onClick={() => onDelete({ id, user })}
        />
      </StyledTd>
    </StyledTr>
  );
};

//стилизвция таблицы
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
