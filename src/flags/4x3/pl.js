import React from "react";

const SvgPl = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path fill="#fff" d="M640 480H0V0h640z" />
      <path fill="#dc143c" d="M640 480H0V240h640z" />
    </g>
  </svg>
);

export default SvgPl;
