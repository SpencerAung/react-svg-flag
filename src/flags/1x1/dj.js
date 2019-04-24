import React from "react";

const SvgDj = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="dj_svg__a">
        <path fillOpacity={0.7} d="M55.4 0H764v708.7H55.4z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      clipPath="url(#dj_svg__a)"
      transform="translate(-40) scale(.722)"
    >
      <path fill="#0c0" d="M0 0h1063v708.7H0z" />
      <path fill="#69f" d="M0 0h1063v354.3H0z" />
      <path fill="#fffefe" d="M0 0l529.7 353.9L0 707.3V0z" />
      <path
        fill="red"
        d="M221.2 404.3l-42.7-30.8-42.4 31 15.8-50.3-42.4-31.2 52.4-.4 16.3-50.2 16.6 50 52.4.2-42.1 31.4 16 50.3z"
      />
    </g>
  </svg>
);

export default SvgDj;
