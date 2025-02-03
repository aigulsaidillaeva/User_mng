import React, { useState } from "react";

import Button from "./components/UI/Button";
import Form from "./components/form/Form";
import { Modal } from "./components/UI/modal";

const USERS = [
  { id: "c1", user: "Atambaed", email: "aa@gmail.com", password: "1234" },
  { id: "c2", user: "Atambaed", email: "aa@gmail.com", password: "1234" },
];
const App = () => {
  return (
    <div>
      <Button variant="default" title="ADD USER" />

      <Table users={USERS} />
      <Modal open={true}>
        <Form />
      </Modal>
    </div>
  );
};

export default App;
