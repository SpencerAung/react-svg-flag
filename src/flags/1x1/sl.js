import React from "react";

const SvgSl = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="sl_svg__a">
        <rect width={384} height={512} rx={4.6} ry={7.6} />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      clipPath="url(#sl_svg__a)"
      transform="scale(1.33333 1)"
    >
      <path fill="#0000cd" d="M0 341.7h512V512H0z" />
      <path fill="#fff" d="M0 171.4h512v170.3H0z" />
      <path fill="#00cd00" d="M0 0h512v171.4H0z" />
    </g>
  </svg>
);

export default SvgSl;
