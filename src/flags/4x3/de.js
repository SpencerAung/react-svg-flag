import React from "react";

const SvgDe = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#ffce00" d="M0 320h640v160H0z" />
    <path d="M0 0h640v160H0z" />
    <path fill="#d00" d="M0 160h640v160H0z" />
  </svg>
);

export default SvgDe;
