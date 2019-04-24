import React from "react";

const SvgAt = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path fill="#fff" d="M640 480H0V0h640z" />
      <path fill="#df0000" d="M640 480H0V320h640zm0-319.9H0V.1h640z" />
    </g>
  </svg>
);

export default SvgAt;
