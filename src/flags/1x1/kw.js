import React from "react";

const SvgKw = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="kw_svg__a">
        <path fillOpacity={0.7} d="M0 0h496v496H0z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#kw_svg__a)"
      transform="scale(1.0321)"
    >
      <path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
      <path fill="#f31830" d="M0 330.7h992.1v165.4H0z" />
      <path fill="#00d941" d="M0 0h992.1v165.4H0z" />
      <path d="M0 0v496l247.5-165.3.5-165.5L0 0z" />
    </g>
  </svg>
);

export default SvgKw;
