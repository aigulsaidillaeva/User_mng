import React, { useState } from "react";
import Input from "../UI/input";
import styled from "styled-components";
import Button from "../UI/Button";

const Form = (props) => {
  console.log(props.obje);
  const [user, setUser] = useState(props.obje.user);
  const [password, setPassword] = useState(props.obje.password);
  const [email, setEmail] = useState(props.obje.email);

  const userValueHandler = (event) => {
    setUser(event.target.value);
  };
  const passwordValueHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailValueHandler = (event) => {
    setEmail(event.target.value);
  };

  function addHandler(event) {
    event.preventDefault();
    const newUserObj = {
      user: user,
      password: password,
      email: email,
    };
    props.onSubmit(newUserObj);
    setEmail("");
    setUser("");
    setPassword("");
  }
  return (
    <StyledForm onSubmit={addHandler}>
      <StyledBox>
        <Input
          type="text"
          placeholder="Write your text"
          onChange={userValueHandler}
          value={user}
        />
      </StyledBox>
      <StyledBox>
        <Input
          type="password"
          placeholder="Write your password"
          onChange={passwordValueHandler}
          value={password}
        />
      </StyledBox>
      <StyledBox>
        <Input
          type="email"
          placeholder="Write your email"
          onChange={emailValueHandler}
          value={email}
        />
      </StyledBox>

      <OtherBox>
        <Button title="cancel" variant="warning" onClick={props.onCancel} />
        <Button title="Submit" variant="default" type="submit" />
      </OtherBox>
    </StyledForm>
  );
};
const StyledForm = styled.form``;
const StyledBox = styled.div`
  margin-bottom: 15px;
`;

const OtherBox = styled(StyledBox)`
  display: flex;
  justify-content: space-between;
`;
export default Form;
