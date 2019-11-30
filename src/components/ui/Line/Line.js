import React from "react";
import "./Line.scss";

const Line = props => {
  return (
    <div
      style={{
        borderTopColor: props.topBorderColor ? props.topBorderColor : null
      }}
      className={"line"}
    />
  );
};

export default Line;
