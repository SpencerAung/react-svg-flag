import React from "react";

const SvgEh = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="eh_svg__a">
        <path fillOpacity={0.7} d="M-158.7 0H524v512h-682.7z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      clipPath="url(#eh_svg__a)"
      transform="translate(148.8) scale(.94)"
    >
      <path d="M-180 0H844v256H-180z" />
      <path fill="#107b00" d="M-180 256H844v256H-180z" />
      <path fill="#fff" d="M-180 169.3H844v176.1H-180z" />
      <path
        fill="#f0f"
        d="M310 195.6c-45.2-19.5-84.1 20.6-84 58 0 39.2 38 81 86 62.5-34-10-48-35.3-48-60.7-.3-25.2 15.8-54.6 46-59.9z"
      />
      <path
        fill="#ff1800"
        d="M363.1 294.2l-25.8-18.9-26 19 10-30.5-26-18.8h32l9.9-30.5 9.8 30.4h32.1l-25.9 18.8"
      />
      <path
        fill="red"
        d="M314.3 315.6a65.2 65.2 0 0 1-89.2-59.4 65 65 0 0 1 89.5-60.9 60.6 60.6 0 0 0-51.2 59.2 61.3 61.3 0 0 0 51 61.1zM-180 0l348.6 256.6L-180 512V0z"
      />
    </g>
  </svg>
);

export default SvgEh;
