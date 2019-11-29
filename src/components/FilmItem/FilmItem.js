import React from "react";
import Stars from "../UI/Stars/Stars";
import "./FilmItem.scss";

const FilmItem = () => {
  return (
    <div className={"FilmItem"}>
      <div className="FilmItem__top">
        <h2 className={"FilmItem__title"}>
          <a href="#">Мэри Поппинс возвращается (2019)</a>
          <Stars />
        </h2>
      </div>
    </div>
  );
};

export default FilmItem;
