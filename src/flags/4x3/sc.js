import React from "react";

const SvgSc = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="sc_svg__a">
        <path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#sc_svg__a)"
      transform="scale(.9375)"
    >
      <path fill="red" d="M0 0h992.1v512H0z" />
      <path fill="#090" d="M0 512l992.1-170.7V512H0z" />
      <path fill="#fff" d="M0 512l992.1-341.3v170.6L0 512z" />
      <path fill="#009" d="M0 512V0h330.7L0 512z" />
      <path fill="#ff0" d="M0 512L330.7 0h330.7L0 512z" />
    </g>
  </svg>
);

export default SvgSc;
