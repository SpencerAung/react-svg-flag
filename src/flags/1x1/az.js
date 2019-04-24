import React from "react";

const SvgAz = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#3f9c35" d="M0 0h512v512H0z" />
    <path fill="#ed2939" d="M0 0h512v341.3H0z" />
    <path fill="#00b9e4" d="M0 0h512v170.7H0z" />
    <circle cx={238.8} cy={256} r={76.8} fill="#fff" />
    <circle cx={255.9} cy={256} r={64} fill="#ed2939" />
    <path
      fill="#fff"
      d="M324.2 213.3l8.1 23 22-10.5-10.4 22 23 8.2-23 8.2 10.4 22-22-10.5-8.1 23-8.2-23-22 10.5 10.5-22-23-8.2 23-8.2-10.5-22 22 10.5 8.2-23z"
    />
  </svg>
);

export default SvgAz;
