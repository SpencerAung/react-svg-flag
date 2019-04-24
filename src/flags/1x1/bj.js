import React from "react";

const SvgBj = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="bj_svg__a">
        <path fill="gray" d="M67.6-154h666v666h-666z" />
      </clipPath>
    </defs>
    <g clipPath="url(#bj_svg__a)" transform="translate(-52 118.4) scale(.7688)">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#319400" d="M0-154h333v666H0z" />
        <path fill="#ffd600" d="M333-154h666v333H333z" />
        <path fill="#de2110" d="M333 179h666v333H333z" />
      </g>
    </g>
  </svg>
);

export default SvgBj;
