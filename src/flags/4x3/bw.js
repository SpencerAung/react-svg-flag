import React from "react";

const SvgBw = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path fill="#00cbff" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path d="M0 186h640v108H0z" />
    </g>
  </svg>
);

export default SvgBw;
