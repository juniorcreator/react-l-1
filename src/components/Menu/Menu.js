import React from "react";
import "./Menu.scss";

const Menu = prop => {
  return (
    <ul className={"menu"}>
      {prop.menu.map((item, index) => {
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
