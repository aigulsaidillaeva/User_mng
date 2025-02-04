import React, { useState } from "react";
import Table from "./components/table/table";
import Button from "./components/UI/Button";
import Form from "./components/form/Form";
import { Modal } from "./components/UI/modal";

const USERS = [
  { id: "c1", user: "Atambaed", email: "aa@gmail.com", password: "1234" },
  { id: "c2", user: "Atambaed", email: "aa@gmail.com", password: "1234" },
];
const App = () => {
  const [users, setUsers] = useState(USERS);
  const [modal, setModal] = useState(false);
  function modalHandelr() {
    setModal((prewState) => !prewState);
  }
  function addUser(param) {
    console.log(param);
    const newUserObject = {
      ...param,
      id: crypto.randomUUID(),
    };
    setUsers([...users, newUserObject]);
    setModal(false);
  }
  return (
    <div>
      <Button variant="default" title="ADD USER" onClick={modalHandelr} />
      <Table users={users} />
      <Modal open={modal}>
        <Form onCancel={modalHandelr} onSubmit={addUser} />
      </Modal>
    </div>
  );
};

export default App;
