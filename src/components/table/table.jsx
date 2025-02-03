import React from "react";
import styled from "styled-components";
import TBody from "./tBody";

const THEADER_ITEM = [
  { id: "f1", name: "id" },
  { id: "f2", name: "user" },
  { id: "f3", name: "email" },
  { id: "f4", name: "password" },
  { id: "f5", name: "view" },
  { id: "f6", name: "delete" },
];

const Table = (props) => {
  return (
    <StyledTable>
      <THeader />
      <TBody users={props.users} />
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
