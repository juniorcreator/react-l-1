import React, { useState } from "react";
import "./SearchPanel.scss";

const SearchPanel = () => {
  let [search, setSearch] = useState("Поиск");
  const handlSearch = e => {
    setSearch(e.target.value);
  };
  return (
    <div className={"search-panel"}>
      <div className="search-panel__bar">
        <form className={"search-panel__form"}>
          <input
            onChange={handlSearch}
            className={"search-panel__search"}
            type="text"
            name="name"
            value={search}
          />
          <button className="search-panel__submit" type="submit" title="ok">
            ok
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPanel;
