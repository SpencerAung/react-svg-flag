import React from "react";

const SvgCh = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#d52b1e" d="M0 0h512v512H0z" />
      <g fill="#fff">
        <path d="M96 208h320v96H96z" />
        <path d="M208 96h96v320h-96z" />
      </g>
    </g>
  </svg>
);

export default SvgCh;
