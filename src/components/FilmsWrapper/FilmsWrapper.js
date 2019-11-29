import React from "react";
import Menu from "../menu/menu";
import FilmsPreview from "../FilmsPreview/FilmsPreview";
import "./FilmsWrapper.scss";

const FilmsWrapper = props => {
  return (
    <div className={"FilmsWrapper content"}>
      <Menu menu={props.menu} />
      <FilmsPreview preview={props.preview} />
    </div>
  );
};

export default FilmsWrapper;
