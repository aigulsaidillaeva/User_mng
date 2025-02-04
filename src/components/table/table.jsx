import React, { useState } from "react";
import styled from "styled-components";
import TBody from "./tBody";
import { Modal } from "../UI/modal";
import Button from "../UI/Button";

//список заголовки таблицы
const THEADER_ITEM = [
  { id: "f1", name: "id" },
  { id: "f2", name: "user" },
  { id: "f3", name: "email" },
  { id: "f4", name: "password" },
  { id: "f5", name: "view" },
  { id: "f6", name: "delete" },
];

const deletingUser = {
  id: null,
  user: "",
};

const Table = (props) => {
  //начальное состояние модалки false закрыто при нажатии меняется
  const [modal, setModal] = useState(false);
  const modalHandler = (param) => {
    deletingUser.id = param.id;
    deletingUser.user = param.user;
    setModal((prevState) => !prevState);
  };
  //при нвжвтии кнрпки для удаленеи юзера
  function deleteUserHandler() {
    props.onDelete(deletingUser);
    setModal(false);
  }

  return (
    <StyledTable>
      <Modal open={modal}>
        <div>
          <h1>Вы уверены удалить {deletingUser.user}</h1>
          <div>
            <Button title="NET" onClick={modalHandler} variant="default" />
            <Button title="DA" variant="warning" onClick={deleteUserHandler} />
          </div>
        </div>
      </Modal>
      <THeader />
      <TBody {...props} onDelete={modalHandler} onView={props.onView} />
    </StyledTable>
  );
};

const THeader = () => {
  return (
    <tr>
      {THEADER_ITEM.map((item) => {
        return <StyledTh key={item.id}>{item.name}</StyledTh>;
      })}
    </tr>
  );
};

const StyledTable = styled.table`
  border: 2px solid blue;
  border-radius: 8px;
  width: 100%;
`;

const StyledTh = styled.th`
  border: 1px solid;
`;

export default Table;
