import React from "react";

const SvgBg = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#d62612" d="M0 320h640v160H0z" />
      <path fill="#fff" d="M0 0h640v160H0z" />
      <path fill="#00966e" d="M0 160h640v160H0z" />
    </g>
  </svg>
);

export default SvgBg;
