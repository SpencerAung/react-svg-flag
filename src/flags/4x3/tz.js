import React from "react";

const SvgTz = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="tz_svg__a">
        <path fillOpacity={0.7} d="M10 0h160v120H10z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#tz_svg__a)"
      transform="matrix(4 0 0 4 -40 0)"
    >
      <path fill="#09f" d="M0 0h180v120H0z" />
      <path fill="#090" d="M0 0h180L0 120V0z" />
      <path d="M0 120h40l140-95V0h-40L0 95v25z" />
      <path
        fill="#ff0"
        d="M0 91.5L137.2 0h13.5L0 100.5v-9zM29.3 120L180 19.5v9L42.8 120H29.3z"
      />
    </g>
  </svg>
);

export default SvgTz;
