import React from "react";

const SvgSe = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="se_svg__a">
        <path fillOpacity={0.7} d="M119 7.3h490.7V498H119z" />
      </clipPath>
    </defs>
    <g
      clipPath="url(#se_svg__a)"
      transform="translate(-124.1 -7.6) scale(1.0433)"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path
          fill="#006aa7"
          d="M2.9 7.6h245.4v196.3H2.9zm0 294.1h245.4V498H2.9z"
        />
        <path fill="#fecc00" d="M2.9 203.8h245.4v98.1H2.9z" />
        <path fill="#fecc00" d="M247.3 7.3h98.1v490.8h-98.1z" />
        <path fill="#fecc00" d="M342.3 203.8H784V302H342.3z" />
        <path
          fill="#006aa7"
          d="M345.3 301.8H787V498H345.3zm0-294.2H787v196.3H345.3z"
        />
      </g>
    </g>
  </svg>
);

export default SvgSe;
