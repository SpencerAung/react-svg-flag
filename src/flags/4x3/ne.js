import React from "react";

const SvgNe = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#0db02b" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0h640v320H0z" />
    <path fill="#e05206" d="M0 0h640v160H0z" />
    <circle cx={320} cy={240} r={68} fill="#e05206" />
  </svg>
);

export default SvgNe;
