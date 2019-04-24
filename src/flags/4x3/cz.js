import React from "react";

const SvgCz = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="cz_svg__a">
        <path fillOpacity={0.7} d="M-74 0h682.7v512H-74z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#cz_svg__a)"
      transform="translate(69.4) scale(.94)"
    >
      <path fill="#e80000" d="M-74 0h768v512H-74z" />
      <path fill="#fff" d="M-74 0h768v256H-74z" />
      <path fill="#00006f" d="M-74 0l382.7 255.7L-74 511V0z" />
    </g>
  </svg>
);

export default SvgCz;
