import React from "react";
import Stars from "../ui/Stars/Stars";
import "./FilmItem.scss";

const FilmItem = () => {
  return (
    <div className={"film-item"}>
      <div className="film-item__top">
        <h2 className={"film-item__title"}>
          <a href="#">Мэри Поппинс возвращается (2019)</a>
          <Stars />
        </h2>
      </div>
    </div>
  );
};

export default FilmItem;
