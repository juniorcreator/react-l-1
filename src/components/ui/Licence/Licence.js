import React from "react";
import "./Licence.scss";

const Licence = props => {
  return (
    <div className="licence">
      <div className="licence__left"></div>
      <div className="licence__text">{props.text}</div>
    </div>
  );
};

export default Licence;
