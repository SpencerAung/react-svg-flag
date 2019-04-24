import React from "react";

const SvgFo = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="fo_svg__a">
        <path fillOpacity={0.7} d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <g fillRule="evenodd" strokeWidth={0} clipPath="url(#fo_svg__a)">
      <path fill="#fff" d="M-78 0h708.2v512H-78z" />
      <path
        fill="#003897"
        d="M-75.9 199.1h198.3V0h113.3v199.1h396.6V313H235.7v199H122.4V312.9H-76V199z"
      />
      <path
        fill="#d72828"
        d="M-75.9 227.6h226.6V0h56.7v227.6h424.9v56.9h-425V512h-56.6V284.4H-75.9v-56.8z"
      />
    </g>
  </svg>
);

export default SvgFo;
