import React from "react";

const SvgJo = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="jo_svg__a">
        <path fillOpacity={0.7} d="M113.6 0H607v493.5H113.6z" />
      </clipPath>
    </defs>
    <g clipPath="url(#jo_svg__a)" transform="translate(-117.8) scale(1.0375)">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M0 0h987v164.5H0z" />
        <path fill="#fff" d="M0 164.5h987V329H0z" />
        <path fill="#090" d="M0 329h987v164.5H0z" />
        <path fill="red" d="M0 493.5l493.5-246.8L0 0v493.5z" />
        <path
          fill="#fff"
          d="M164.8 244l22 10.6h-24.5l5.5 24-15.3-19.3-15.3 19.2 5.5-23.9H118l22.1-10.7-15.3-19.1 22.1 10.6 5.5-23.9 5.5 24 22-10.7z"
        />
      </g>
    </g>
  </svg>
);

export default SvgJo;
