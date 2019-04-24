import React from "react";

const SvgId = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#e70011" d="M0 0h640v249H0z" />
      <path fill="#fff" d="M0 240h640v240H0z" />
    </g>
  </svg>
);

export default SvgId;
