import React from "react";

const SvgSe = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="se_svg__a">
        <path fillOpacity={0.7} d="M-53.4 0h682.6v512H-53.4z" />
      </clipPath>
    </defs>
    <g clipPath="url(#se_svg__a)" transform="translate(50) scale(.9375)">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path
          fill="#006aa7"
          d="M-121.1.3h256v204.8h-256zm0 306.9h256V512h-256z"
        />
        <path fill="#fecc00" d="M-121.1 205h256v102.4h-256z" />
        <path fill="#fecc00" d="M133.8 0h102.4v512H133.8z" />
        <path fill="#fecc00" d="M233 205h460.8v102.4H233z" />
        <path
          fill="#006aa7"
          d="M236.2 307.2H697V512H236.2zm0-306.9H697v204.8H236.2z"
        />
      </g>
    </g>
  </svg>
);

export default SvgSe;
