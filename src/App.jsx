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
  const [obje, setObje] = useState({
    id: "",
    user: "",
    email: "",
    password: "",
  });
  function modalHandelr() {
    setModal((prewState) => !prewState);
    setObje({ id: "", user: "", email: "", password: "" });
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

  function deleteUser(param) {
    const exchangedUsers = users.filter((item) => item.id !== param.id);
    setUsers(exchangedUsers);
    setModal(false);
  }
  function viewUser(param) {
    setObje({
      user: param.user,
      password: param.password,
      email: param.email,
    });
    setModal(true);
  }

  return (
    <div>
      <Button variant="default" title="ADD USER" onClick={modalHandelr} />
      <Table users={users} onDelete={deleteUser} onView={viewUser} />
      <Modal open={modal}>
        <Form onCancel={modalHandelr} onSubmit={addUser} obje={obje} />
      </Modal>
    </div>
  );
};

export default App;
