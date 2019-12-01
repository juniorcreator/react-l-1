import React from "react";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="bot-navigation pagination__wrap" align="center">
        <span>Раньше</span>
        <span>1</span>
        <a href="http://kinogo.cc/filmy__2019/page/2/">2</a>
        <a href="http://kinogo.cc/filmy__2019/page/3/">3</a>
        <a href="http://kinogo.cc/filmy__2019/page/4/">4</a>
        <a href="http://kinogo.cc/filmy__2019/page/2/">Позже</a>
      </div>
    </div>
  );
};

export default Pagination;
