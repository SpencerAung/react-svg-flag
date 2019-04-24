import React from "react";

const SvgPs = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="ps_svg__a">
        <path fillOpacity={0.7} d="M237.1 0h493.5v493.5H237.1z" />
      </clipPath>
    </defs>
    <g clipPath="url(#ps_svg__a)" transform="translate(-246) scale(1.0375)">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h987v164.5H0z" />
        <path fill="#fff" d="M0 164.5h987V329H0z" />
        <path fill="#090" d="M0 329h987v164.5H0z" />
        <path fill="red" d="M0 493.5l493.5-246.8L0 0v493.5z" />
      </g>
    </g>
  </svg>
);

export default SvgPs;
