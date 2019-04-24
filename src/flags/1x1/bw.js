import React from "react";

const SvgBw = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path fill="#00cbff" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 192h512v128H0z" />
      <path d="M0 212.7h512V299H0z" />
    </g>
  </svg>
);

export default SvgBw;
