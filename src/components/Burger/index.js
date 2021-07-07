import React from "react";
import PropTypes from "prop-types";

import css from "./burger.css";

const Burger = (props) => {
  const root = typeof document !== "undefined" ? document.documentElement : "";
  const {
    active,
    onClick,
    burger,
    color,
    hoverOpacity,
    scale,
    marginTop,
    marginLeft,
    style,
  } = props;

  if (root) {
    root.style.setProperty("--burger-color", color);
    root.style.setProperty("--burger-opacity-hover", hoverOpacity);
    root.style.setProperty("--burger-scale", scale);
    root.style.setProperty("--burger-margin-top", marginTop);
    root.style.setProperty("--burger-margin-left", marginLeft);
  }

  const classes = {
    burger: `${css["hamburger"]} ${css[`hamburger--${burger}`]}`,
    box: `${css["hamburger-box"]}`,
    inner: `${css["hamburger-inner"]}`,
    active: active ? `${css["is-active"]}` : "",
  };

  return (
    <button
      onClick={onClick}
      className={`${classes.burger} ${classes.active}`}
      type="button"
      style={style}
    >
      <span className={classes.box}>
        <span className={classes.inner} />
      </span>
    </button>
  );
};

Burger.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  burger: PropTypes.oneOf([
    "arrow",
    "arrowalt",
    "arrowturn",
    "boring",
    "collapse",
    "elastic",
    "emphatic",
    "minus",
    "slider",
    "spin",
    "spring",
    "squeeze",
    "stand",
    "vortex",
    "3dx",
    "3dy",
    "3dxy",
  ]),
  color: PropTypes.string,
  hoverOpacity: PropTypes.number,
  scale: PropTypes.number,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
  style: PropTypes.object,
};

Burger.defaultProps = {
  burger: "boring",
  color: "#000",
  hoverOpacity: 1,
  scale: 1,
  marginTop: "25px",
  marginLeft: "25px",
};

export default Burger;
