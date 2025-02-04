import React, { useState } from "react";
import Table from "./components/table/table";
import Button from "./components/UI/Button";
import Form from "./components/form/Form";
import { Modal } from "./components/UI/modal";

//список пользователей
const USERS = [
  { id: "c1", user: "Atambaed", email: "aa@gmail.com", password: "1234" },
  { id: "c2", user: "Atambaed", email: "aa@gmail.com", password: "1234" },
];
const App = () => {
  const [users, setUsers] = useState(USERS); // пользователи
  const [modal, setModal] = useState(false); //модальное окно
  const [obje, setObje] = useState({
    id: "",
    user: "",
    email: "",
    password: "",
  });

  function modalHandelr() {
    setModal((prewState) => !prewState);
    setObje({ id: "", user: "", email: "", password: "" });
  } // при нажатии на модальное окно состояние меняется на противоположоное состояние

  //добавление нового юзера в списокБ все приходит из инпута кроме айди
  function addUser(param) {
    const newUserObject = {
      ...param,
      id: crypto.randomUUID(),
    };
    //добавление в список
    setUsers([...users, newUserObject]);
    //саначала модалка будет закрыта
    setModal(false);
  }

  //удаление юзера из списка
  function deleteUser(param) {
    const exchangedUsers = users.filter((item) => item.id !== param.id);
    setUsers(exchangedUsers);
    setModal(false);
  }

  //посмотреть данные юзера
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
