import React, { useContext } from "react";
import Context from "../../context";
import "./Menu.scss";

const Menu = () => {
  let { menu } = useContext(Context);
  return (
    <ul className={"menu"}>
      {menu.map((item, index) => {
        return (
          <li key={index + "id"} className={"menu__item"}>
            <a href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
