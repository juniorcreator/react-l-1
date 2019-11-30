import React from "react";
import Line from "../../ui/Line/Line";
import Kinds from "../../ui/Kinds/Kinds";
import "./NavPanel.scss";

const navPanel = props => {
  let { catName } = props;
  return (
    <div className={"nav-panel"}>
      <h3 className="nav-panel__title">Панель навигации</h3>
      <Line topBorderColor={"#848480"} />
      <div className="nav-panel__content">
        {Object.keys(props.data).map((item, index) => {
          return (
            <Kinds data={props.data[item]} key={index} title={catName[index]} />
          );
        })}
        {props.children}
      </div>
    </div>
  );
};

export default navPanel;
