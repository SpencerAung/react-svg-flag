import React from "react";

const SvgJp = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="jp_svg__a">
        <path fillOpacity={0.7} d="M177.2 0h708.6v708.7H177.2z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#jp_svg__a)"
      transform="translate(-128) scale(.72249)"
    >
      <path fill="#fff" d="M0 0h1063v708.7H0z" />
      <ellipse
        cx={523.1}
        cy={344.1}
        fill="#d30000"
        rx={194.9}
        ry={194.9}
        transform="translate(-59.7 -34.5) scale(1.1302)"
      />
    </g>
  </svg>
);

export default SvgJp;
