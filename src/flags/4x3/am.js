import React from "react";

const SvgAm = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="red" d="M0 0h640v160H0z" />
    <path fill="#00f" d="M0 160h640v160H0z" />
    <path fill="orange" d="M0 320h640v160H0z" />
  </svg>
);

export default SvgAm;
