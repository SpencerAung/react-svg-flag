import React from "react";

const SvgJp = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="jp_svg__a">
        <path fillOpacity={0.7} d="M-88 32h640v480H-88z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#jp_svg__a)"
      transform="translate(88 -32)"
    >
      <path fill="#fff" d="M-128 32h720v480h-720z" />
      <ellipse
        cx={523.1}
        cy={344.1}
        fill="#d30000"
        rx={194.9}
        ry={194.9}
        transform="translate(-168.4 8.6) scale(.76554)"
      />
    </g>
  </svg>
);

export default SvgJp;
