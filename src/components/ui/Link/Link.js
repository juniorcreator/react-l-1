import React from "react";
import PropTypes from "prop-types";
import "./Link.scss";

const Link = props => {
  return (
    <a
      href={props.href}
      target={props.isTarget ? "_blank" : "_self"}
      style={{ fontSize: props.fontSize ? props.fontSize + "px" : null }}
      className={["link", props.clas ? [...props.clas].join("") : null].join(
        " "
      )}
    >
      {props.text}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired
};

export default Link;
