import React from "react";
import Link from "../Link/Link";
import "./Kinds.scss";

const Kinds = props => {
  return (
    <div className={"kinds"}>
      <div className="kinds__title">{props.title}</div>
      <ul>
        {props.data.map((item, index) => {
          return (
            <li key={index}>
              <Link clas={"primary"} isTarget={false} text={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Kinds;
