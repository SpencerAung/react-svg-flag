import React from "react";

const SvgCo = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#ffe800" d="M0 0h512v512H0z" />
      <path fill="#00148e" d="M0 256h512v256H0z" />
      <path fill="#da0010" d="M0 384h512v128H0z" />
    </g>
  </svg>
);

export default SvgCo;
