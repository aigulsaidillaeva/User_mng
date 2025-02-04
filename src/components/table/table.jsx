import React, { useState } from "react";
import styled from "styled-components";
import TBody from "./tBody";
import { Modal } from "../UI/modal";
import Button from "../UI/Button";

const THEADER_ITEM = [
  { id: "f1", name: "id" },
  { id: "f2", name: "user" },
  { id: "f3", name: "email" },
  { id: "f4", name: "password" },
  { id: "f5", name: "view" },
  { id: "f6", name: "delete" },
];

const Table = (props) => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal((prevState) => !prevState);
  };
  console.log(modal);
  return (
    <StyledTable>
      <Modal open={modal}>
        <div>
          <h1>Вы уверены</h1>
          <div>
            <Button title="NET" variant="default" />
            <Button title="DA" variant="warning" onClick={onDelete(id)} />
          </div>
        </div>
      </Modal>
      <THeader />
      <TBody {...props} onDelete={modalHandler} />
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
