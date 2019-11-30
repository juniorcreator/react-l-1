import React from "react";
import Menu from "../Menu/Menu";
import FilmsPreview from "../FilmsPreview/FilmsPreview";
import "./FilmsWrapper.scss";

const FilmsWrapper = props => {
  return (
    <div className={"films-wrapper content"}>
      <Menu menu={props.menu} />
      <FilmsPreview preview={props.preview} />
    </div>
  );
};

export default FilmsWrapper;
