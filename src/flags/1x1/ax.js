import React from "react";

const SvgAx = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="ax_svg__a">
        <path fillOpacity={0.7} d="M166 0h850v850H166z" />
      </clipPath>
    </defs>
    <g clipPath="url(#ax_svg__a)" transform="translate(-100) scale(.6024)">
      <path fill="#0053a5" d="M0 0h1300v850H0z" />
      <g fill="#ffce00">
        <path d="M400 0h250v850H400z" />
        <path d="M0 300h1300v250H0z" />
      </g>
      <g fill="#d21034">
        <path d="M475 0h100v850H475z" />
        <path d="M0 375h1300v100H0z" />
      </g>
    </g>
  </svg>
);

export default SvgAx;
