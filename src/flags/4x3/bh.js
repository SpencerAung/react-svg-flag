import React from "react";

const SvgBh = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="bh_svg__a">
        <path fillOpacity={0.7} d="M0 0h640v480H0z" />
      </clipPath>
    </defs>
    <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#bh_svg__a)">
      <path fill="#e10011" d="M-32.5 0h720v480h-720z" />
      <path
        fill="#fff"
        d="M114.3 479.8l-146.8.2V0h146l94.3 30.4-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5 93.5 30.5-93.5 29.5"
      />
    </g>
  </svg>
);

export default SvgBh;
