import React from "react";
import Line from "../../ui/Line/Line";
import Add from "../../ui/Add/Add";
import NavPanel from "../NavPanel/NavPanel";
import FilmItem from "../../FilmItem/FilmItem";
import "./FilmsConteiner.scss";

const FilmsConteiner = () => {
  return (
    <div className={"films-container"}>
      <div className="content">
        <NavPanel />
        <div className="films-container__right">
          <div className="films-container__r-title">
            <h1>Раздел с Фильмами 2019 года</h1>
          </div>
          <Line />
          <Add />
          <div className="films-container__films">
            <FilmItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsConteiner;
