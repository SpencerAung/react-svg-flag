import React from "react";

const SvgAg = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="ag_svg__a">
        <path fillOpacity={0.7} d="M-79.7 0H603v512H-79.7z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      clipPath="url(#ag_svg__a)"
      transform="translate(74.7) scale(.9375)"
    >
      <path fill="#fff" d="M-120 0h763.3v511.5H-120z" />
      <path d="M-118.3.6h760.9v216.1h-761z" />
      <path fill="#0061ff" d="M21.3 203.2h505V317h-505z" />
      <path
        fill="#e20000"
        d="M642.8 1.8V512H262L642.8 1.7zm-761.5 0V512H262L-118.7 1.7z"
      />
      <path
        fill="#ffd600"
        d="M440.4 203.3L364 184l64.9-49-79.7 11.4 41-69.5-70.7 41L332.3 37l-47.9 63.8-19.3-74-21.7 76.3-47.8-65 13.7 83.2L138.5 78l41 69.5-77.4-12.5 63.8 47.8L86 203.3h354.3z"
      />
    </g>
  </svg>
);

export default SvgAg;
