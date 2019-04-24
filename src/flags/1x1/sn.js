import React from "react";

const SvgSn = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#0b7226" d="M0 0h170.7v512H0z" />
      <path fill="#ff0" d="M170.7 0h170.6v512H170.7z" />
      <path fill="#bc0000" d="M341.3 0H512v512H341.3z" />
    </g>
    <path
      fill="#0b7226"
      d="M197 351.7l22-71.7-60.4-46.5h74.5l24.2-76 22.1 76H356L295.6 280l22.1 74-60.3-46.5z"
    />
  </svg>
);

export default SvgSn;