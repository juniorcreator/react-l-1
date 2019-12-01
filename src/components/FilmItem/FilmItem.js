import React from "react";
import Licence from "../ui/Licence/Licence";
import Stars from "../ui/Stars/Stars";
import Link from "../ui/Link/Link";
import "./FilmItem.scss";

const FilmItem = ({ film }) => {
  return (
    <div className={"film-item"}>
      <div className="film-item__top">
        <h2 className={"film-item__title"}>
          <a href="#">{film.title}</a>
          <Stars />
        </h2>
      </div>
      <div className="film-item__mid">
        <div className="film-item__img">
          <a href="#" className="film-item__img-wrap">
            <img src={`/img/films/${film.id}.jpg`} alt="img" />
            {film.licence ? <Licence text="Лицензия" /> : null}
          </a>
          <Link clas="second" href="#" text="Смотреть онлайн" />
        </div>
        <div className="film-item__right">
          <div className="film-item__descript">{film.descript}</div>
          <div className="film-item__row">
            Год выпуска: <Link href="#" text={film.year} />
          </div>
          <div className="film-item__row">
            Страна: <Link href="#" text={film.country} />
          </div>
          <div className="film-item__row">
            Жанр: &nbsp;
            {film.janras.map((item, index) => (
              <Link key={index} href="#" text={item} />
            ))}
          </div>
          <div className="film-item__row">
            Качество: <span>{film.quality}</span>{" "}
          </div>
          <div className="film-item__row">
            Перевод: <span>{film.translate}</span>{" "}
          </div>
          <div className="film-item__row">
            Продолжительность: <span>{film.duration}</span>
          </div>
          <div className="film-item__row">
            Премьера (РФ): <span>{film.premyera}</span>
          </div>
          <div className="film-item__uploaded">
            <span>{film.published}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmItem;
