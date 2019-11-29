import React from "react";
import "./Line.scss";

const Line = props => {
  return (
    <div
      style={{
        borderTopColor: props.topBorderColor ? props.topBorderColor : null
      }}
      className={"Line"}
    />
  );
};

export default Line;
