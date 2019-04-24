import React from "react";

const SvgAt = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path fill="#fff" d="M512 512H0V0h512z" />
      <path fill="#df0000" d="M512 512H0V341.3h512zm0-341.2H0V.1h512z" />
    </g>
  </svg>
);

export default SvgAt;
