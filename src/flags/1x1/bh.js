import React from "react";

const SvgBh = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="bh_svg__a">
        <path fill="gray" d="M119-196.7h708.7V512H119z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#bh_svg__a)"
      transform="translate(-86 142) scale(.7225)"
    >
      <path fill="#e10011" d="M0-196.7h1063V512H0z" />
      <path
        fill="#fff"
        d="M216.7 511.7L0 512v-708.7l215.6.2 139.2 44.7-138.1 43.6 138 45-138 43.6 138 45-138 43.6 138 45-138 43.6 138 45-138 43.5 138 45-138 43.6 138 45-138 43.6 138 45-138 43.6"
      />
    </g>
  </svg>
);

export default SvgBh;
