import React, { useState } from "react";
import Table from "./components/table/table";
import Button from "./components/UI/Button";

const USERS = [
  { id: "c1", user: "Atambaed", email: "aa@gmail.com", password: "1234" },
  { id: "c2", user: "Atambaed", email: "aa@gmail.com", password: "1234" },
];
const App = () => {
  const [modal, setModal] = useState(true);
  return (
    <div>
      <Button variant="default" title="ADD USER" />
      <Table users={USERS}></Table>
    </div>
  );
};

export default App;
