import React, { useContext } from "react";
import Context from "../../../context";
import Line from "../../ui/Line/Line";
import Kinds from "../../ui/Kinds/Kinds";
import "./NavPanel.scss";

const NavPanel = props => {
  let { filmCategory, years, byCountry, serials } = useContext(Context);
  return (
    <div className={"nav-panel"}>
      <h3 className="nav-panel__title">Панель навигации</h3>
      <Line topBorderColor={"#848480"} />
      <div className="nav-panel__content">
        <Kinds data={filmCategory} title="Категории" />
        <Kinds data={years} title="По году" />
        <Kinds data={byCountry} title="По странам" />
        <Kinds data={serials} title="Сериалы" />
        {props.children}
      </div>
    </div>
  );
};

export default NavPanel;
