import React from "react";

const SvgCf = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="cf_svg__a">
        <path fillOpacity={0.7} d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <g fillRule="evenodd" clipPath="url(#cf_svg__a)">
      <path fill="#00f" d="M-52-.5h768v127H-52z" />
      <path fill="#ff0" d="M-52 383.5h768V512H-52z" />
      <path fill="#009a00" d="M-52 255h768v128.5H-52z" />
      <path fill="#fff" d="M-52 126.5h768V255H-52z" />
      <path fill="red" d="M268 0h128v512H268z" />
      <path
        fill="#ff0"
        d="M109.5 112.3L75.9 89.1l-33.4 23.4 11.6-39.2-32.5-24.6 40.7-1L75.7 8.8l13.5 38.6 40.8.8L97.6 73"
      />
    </g>
  </svg>
);

export default SvgCf;
