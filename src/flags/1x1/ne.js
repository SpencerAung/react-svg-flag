import React from "react";

const SvgNe = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#0db02b" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M0 0h512v341.3H0z" />
    <path fill="#e05206" d="M0 0h512v170.7H0z" />
    <circle cx={256} cy={256} r={72.5} fill="#e05206" />
  </svg>
);

export default SvgNe;
