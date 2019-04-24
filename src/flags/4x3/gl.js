import React from "react";

const SvgGl = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path
      fill="#d00c33"
      d="M0 240h640v240H0zm80 0a160 160 0 1 0 320 0 160 160 0 0 0-320 0"
    />
  </svg>
);

export default SvgGl;