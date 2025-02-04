import React from "react";
import TItem from "./tItem";

const TBody = (props) => {
  console.log(props);
  return props.users.map((item, index) => {
    return (
      <TItem
        key={item.id}
        count={index + 1}
        onDelete={props.onDelete}
        {...item}
      />
    );
  });
};

export default TBody;
