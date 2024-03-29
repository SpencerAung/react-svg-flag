import React from "react";

const SvgMr = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#cd2a3e" d="M0 0h512v512H0z" />
    <path fill="#006233" d="M0 76.8h512v358.4H0z" />
    <path
      fill="#ffc400"
      d="M416 164.9a160 160 0 0 1-320 0 165.2 165.2 0 0 0-5.4 41.8A165.4 165.4 0 1 0 416 165z"
      className="mr_svg__st1"
    />
    <path
      fill="#ffc400"
      d="M256 100l-14.4 44.3h-46.5l37.6 27.3-14.3 44.2 37.6-27.3 37.6 27.3-14.4-44.2 37.7-27.3h-46.5z"
    />
  </svg>
);

export default SvgMr;
