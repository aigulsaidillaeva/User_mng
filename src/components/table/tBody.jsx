import React from "react";
import TItem from "./tItem";
import styled from "styled-components";

const TBody = (props) => {
  return props.users.map((item) => {
    return <TItem key={item.id} {...item} />;
  });
};

export default TBody;
