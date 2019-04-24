import React from "react";

const SvgPr = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="pr_svg__a">
        <path fillOpacity={0.7} d="M51.6 0h708.7v708.7H51.6z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      clipPath="url(#pr_svg__a)"
      transform="translate(-37.3) scale(.72249)"
    >
      <path fill="#ed0000" d="M0 0h1063v708.7H0z" />
      <path fill="#fff" d="M0 141.7h1063v141.8H0zm0 283.5h1063v141.7H0z" />
      <path fill="#0050f0" d="M0 0l610 353.9L0 707.3V0z" />
      <path
        fill="#fff"
        d="M268.2 450.5l-65.7-49-65.3 49.5 24.3-80.5-65.3-49.7 80.7-.7 25-80.2 25.6 80 80.7.1-64.9 50.2 24.9 80.3z"
      />
    </g>
  </svg>
);

export default SvgPr;
