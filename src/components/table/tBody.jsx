import React from "react";
import TItem from "./tItem";

const TBody = (props) => {
  return props.users.map((item, index) => {
    return (
      <TItem
        key={item.id}
        count={index + 1}
        onDelete={props.onDelete}
        onView={props.onView}
        {...item}
      />
    );
  });
};

export default TBody;
