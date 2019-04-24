import React from "react";

const SvgMv = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#d21034" d="M0 0h512v512H0z" />
    <path fill="#007e3a" d="M128 128h256v256H128z" />
    <circle cx={288} cy={256} r={85.3} fill="#fff" />
    <ellipse cx={308.6} cy={256} fill="#007e3a" rx={73.9} ry={85.3} />
  </svg>
);

export default SvgMv;
