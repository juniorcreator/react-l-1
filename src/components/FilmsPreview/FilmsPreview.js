import React, { useContext } from "react";
import Context from "../../context";
import "./FilmsPreview.scss";

const FilmsPreview = () => {
  let { preview } = useContext(Context);
  return (
    <div className="films-preview">
      <div className="films-preview__wrap">
        <ul className={"films-preview__list"}>
          {preview.map((film, index) => {
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
