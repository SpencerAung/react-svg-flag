import React from "react";

const SvgTn = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="tn_svg__a">
        <path fillOpacity={0.7} d="M124 0h496v496H124z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      clipPath="url(#tn_svg__a)"
      transform="translate(-128) scale(1.0321)"
    >
      <path fill="#e70013" d="M0 0h744v496H0z" />
      <path
        fill="#fff"
        d="M497.8 247.8a125.1 125.1 0 1 1-250.2 0 125.1 125.1 0 0 1 250.2 0z"
      />
      <path
        fill="#e70013"
        d="M372.7 330.8a83 83 0 0 1-83-83 83 83 0 0 1 83-83c11.4 0 24.5 2.7 33.3 9.2-60.6 2.3-76 53.7-76 74.5s9.8 67 76 73.8a70.4 70.4 0 0 1-33.3 8.5z"
      />
      <path
        fill="#e70013"
        d="M445.8 282.7L408.1 269l-24.9 31.4 1.4-40-37.6-14 38.6-11.1 1.7-40 22.4 33.2 38.6-10.8-24.7 31.6z"
      />
    </g>
  </svg>
);

export default SvgTn;
