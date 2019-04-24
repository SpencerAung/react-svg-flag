import React from "react";

const SvgCz = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="cz_svg__a">
        <path fillOpacity={0.7} d="M102.4 0h708.7v708.7H102.4z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#cz_svg__a)"
      transform="translate(-74) scale(.722)"
    >
      <path fill="#e80000" d="M0 0h1063v708.7H0z" />
      <path fill="#fff" d="M0 0h1063v354.3H0z" />
      <path fill="#00006f" d="M0 0l529.7 353.9L0 707.3V0z" />
    </g>
  </svg>
);

export default SvgCz;
