import React from 'react';
import Line from "../../UI/Line/Line";
import Add from "../../Add/Add";
import NavPanel from "../NavPanel/NavPanel";
import FilmItem from "../../FilmItem/FilmItem";
import './FilmsConteiner.scss'

const FilmsConteiner = (props) => {
  return (
      <div className={'FilmsConteiner'}>
        <div className="content">
          <NavPanel catName={props.catName} data={props.data} />
          <div className="FilmsConteiner__right">
            <div className="FilmsConteiner__r-title">
              <h1>Раздел с Фильмами 2019 года</h1>
            </div>
            <Line />
            <Add />
            <div className="FilmsConteiner__films">
              <FilmItem />
            </div>
          </div>
        </div>
      </div>
  );
};

export default FilmsConteiner;