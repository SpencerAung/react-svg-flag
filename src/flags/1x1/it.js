import React from "react";

const SvgIt = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#009246" d="M0 0h170.7v512H0z" />
      <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
    </g>
  </svg>
);

export default SvgIt;