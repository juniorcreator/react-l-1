import React from "react";
import "./FilmsPreview.scss";

const FilmsPreview = props => {
  return (
    <div className="films-preview">
      <div className="films-preview__wrap">
        <ul className={"films-preview__list"}>
          {props.preview.map((film, index) => {
            return (
              <li key={index + "id"} className={"films-preview__item"}>
                <div className={"films-preview__inner"}>
                  <a href="#">
                    <img src={`/img/preview/${index + 1}.jpg`} alt="img" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilmsPreview;
