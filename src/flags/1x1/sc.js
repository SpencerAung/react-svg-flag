import React from "react";

const SvgSc = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="sc_svg__a">
        <path fillOpacity={0.7} d="M0 0h512v496H0z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#sc_svg__a)"
      transform="scale(1 1.0321)"
    >
      <path fill="red" d="M0 0h992.1v496H0z" />
      <path fill="#090" d="M0 496l992.1-165.3v165.4H0z" />
      <path fill="#fff" d="M0 496l992.1-330.6v165.3L0 496.1z" />
      <path fill="#009" d="M0 496V0h330.7L0 496z" />
      <path fill="#ff0" d="M0 496L330.7 0h330.7L0 496z" />
    </g>
  </svg>
);

export default SvgSc;
