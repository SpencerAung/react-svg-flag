import React from "react";

const SvgCg = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="cg_svg__a">
        <path fillOpacity={0.7} d="M115.7 0h496.1v496h-496z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#cg_svg__a)"
      transform="translate(-119.5) scale(1.032)"
    >
      <path fill="#ff0" d="M0 0h744v496H0z" />
      <path fill="#00ca00" d="M0 0v496L496 0H0z" />
      <path fill="red" d="M248 496h496V0L248 496z" />
    </g>
  </svg>
);

export default SvgCg;
