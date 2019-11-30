import React from "react";
import Line from "../../ui/Line/Line";
import Add from "../../ui/Add/Add";
import NavPanel from "../NavPanel/NavPanel";
import FilmItem from "../../FilmItem/FilmItem";
import "./FilmsConteiner.scss";

const FilmsConteiner = props => {
  return (
    <div className={"films-conteiner"}>
      <div className="content">
        <NavPanel catName={props.catName} data={props.data} />
        <div className="films-conteiner__right">
          <div className="films-conteiner__r-title">
            <h1>Раздел с Фильмами 2019 года</h1>
          </div>

          <Line />
          <Add />
          <div className="films-conteiner__films">
            <FilmItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsConteiner;
