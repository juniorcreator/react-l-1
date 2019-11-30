import React from "react";
import Logo from "../Logo/Logo";
import UserPanel from "../UserPanel/UserPanel";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./Header.scss";

export default Header => {
  return (
    <div className={"header"}>
      <div className={"content jcsb-aic"}>
        <Logo />
        <UserPanel />
        <SearchPanel />
      </div>
    </div>
  );
};
