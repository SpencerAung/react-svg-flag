import React from "react";

const SvgGbSct = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#0065bd" d="M0 0h640v480H0z" />
    <path
      stroke="#fff"
      strokeWidth={0.6}
      d="M0 0l5 3M0 3l5-3"
      transform="scale(128 160)"
    />
  </svg>
);

export default SvgGbSct;
