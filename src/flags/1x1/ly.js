import React from "react";

const SvgLy = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="ly_svg__a">
        <path d="M250 12h500v500H250z" />
      </clipPath>
    </defs>
    <g
      clipPath="url(#ly_svg__a)"
      transform="translate(-256 -12.3) scale(1.024)"
    >
      <path fill="#239e46" d="M0 12h1000v500H0z" />
      <path d="M0 12h1000v375H0z" />
      <path fill="#e70013" d="M0 12h1000v125H0z" />
      <path
        fill="#fff"
        d="M544.2 217.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 262l84.1-27.3-52 71.5v-88.4l52 71.5z"
      />
    </g>
  </svg>
);

export default SvgLy;
