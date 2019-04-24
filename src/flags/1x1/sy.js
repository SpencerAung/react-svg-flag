import React from "react";

const SvgSy = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <rect
      width={512}
      height={170.7}
      y={170.7}
      fill="#fff"
      fillRule="evenodd"
      rx={0}
      ry={0}
    />
    <rect
      width={512}
      height={170.7}
      y={341.3}
      fillRule="evenodd"
      rx={0}
      ry={0}
    />
    <path fill="red" fillRule="evenodd" d="M0 0h512v170.7H0z" />
    <path
      fill="#090"
      fillRule="evenodd"
      d="M151.4 299.7l-30.8-22.2L90 300l11.4-36.6L70.9 241l37.8-.3 11.7-36.5 12 36.4H170l-30.4 22.8 11.7 36.4zm285.4 0l-30.7-22.2-30.6 22.5 11.4-36.6-30.5-22.5 37.7-.3 11.7-36.5 12 36.4h37.8l-30.4 22.8 11.6 36.4z"
    />
  </svg>
);

export default SvgSy;
