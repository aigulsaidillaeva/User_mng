import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalUI = (props) => {
  return (
    <Wrapper onClick={props.onClose}>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

export const Modal = (props) => {
  const { open, ...rest } = props;
  return (
    open &&
    createPortal(<ModalUI {...rest} />, document.getElementById("modal"))
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 40px 32px;
  position: fixed;
  z-index: 100;
  top: 50%;
  box-shadow: 5px 5px 5px 5px black;
`;

const Content = styled.div``;
