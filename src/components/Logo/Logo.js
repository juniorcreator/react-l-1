import React, { Component } from "react";
import "./Logo.scss";

class Logo extends Component {
  render() {
    return (
      <div className={"logo"}>
        <a href="">
          <img src="/img/kinogo.png" alt="logo" />
        </a>
      </div>
    );
  }
}

export default Logo;
