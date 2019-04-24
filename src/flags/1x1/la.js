import React from "react";

const SvgLa = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="la_svg__a">
        <path fillOpacity={0.7} d="M177.2 0h708.6v708.7H177.2z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      clipPath="url(#la_svg__a)"
      transform="translate(-128) scale(.72249)"
    >
      <path fill="#ce1126" d="M0 0h1063v708.7H0z" />
      <path fill="#002868" d="M0 176h1063v356.6H0z" />
      <path
        fill="#fff"
        d="M684.2 354.3a152.7 152.7 0 1 1-305.4 0 152.7 152.7 0 0 1 305.4 0z"
      />
    </g>
  </svg>
);

export default SvgLa;
