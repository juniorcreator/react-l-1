import React, { useContext } from "react";
import Context from "../../../context";
import Line from "../../ui/Line/Line";
import Add from "../../ui/Add/Add";
import NavPanel from "../NavPanel/NavPanel";
import FilmItem from "../../FilmItem/FilmItem";
import Pagination from "../../ui/Pagination/Pagination";
import "./FilmsConteiner.scss";

const FilmsConteiner = () => {
  let { films } = useContext(Context);
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
            {films.map(film => (
              <FilmItem film={film} key={film.id} />
            ))}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsConteiner;
