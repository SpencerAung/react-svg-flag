import React from "react";

const SvgGd = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <g id="gd_svg__c">
        <g id="gd_svg__b">
          <path
            id="gd_svg__a"
            fill="#fcd116"
            d="M0-1v1h.5"
            transform="rotate(18 0 -1)"
          />
          <use
            width="100%"
            height="100%"
            transform="scale(-1 1)"
            xlinkHref="#gd_svg__a"
          />
        </g>
        <use
          width="100%"
          height="100%"
          transform="rotate(72)"
          xlinkHref="#gd_svg__b"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(144)"
          xlinkHref="#gd_svg__b"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(-144)"
          xlinkHref="#gd_svg__b"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(-72)"
          xlinkHref="#gd_svg__b"
        />
      </g>
    </defs>
    <path fill="#ce1126" d="M0 0h512v512H0z" />
    <path fill="#007a5e" d="M71.7 71.7h368.6v368.6H71.7z" />
    <path fill="#fcd116" d="M71.7 71.7h368.6L71.7 440.4h368.6z" />
    <circle cx={255.9} cy={256.1} r={61.4} fill="#ce1126" />
    <use
      width="100%"
      height="100%"
      transform="translate(256 256) scale(56.32)"
      xlinkHref="#gd_svg__c"
    />
    <use
      width="100%"
      height="100%"
      x={-100}
      transform="translate(-16.4 -.1)"
      xlinkHref="#gd_svg__d"
    />
    <use
      id="gd_svg__d"
      width="100%"
      height="100%"
      transform="translate(256 35.9) scale(33.28)"
      xlinkHref="#gd_svg__c"
    />
    <use
      width="100%"
      height="100%"
      x={100}
      transform="translate(16.4)"
      xlinkHref="#gd_svg__d"
    />
    <path
      fill="#ce1126"
      d="M99.8 256.8c7.7 14.3 22.6 29.8 35.7 35.3.2-14.5-5-33.2-12-48l-23.7 12.7z"
    />
    <path
      fill="#fcd116"
      d="M86.8 207.6c11.1 23.3-29 78.7 37.8 91.7a67.5 67.5 0 0 1-11.5-44.7 75.5 75.5 0 0 1 34.6 32.8c17.5-63.4-44.8-59.5-61-79.8z"
    />
    <use
      width="100%"
      height="100%"
      x={-100}
      transform="translate(-16.4 442)"
      xlinkHref="#gd_svg__d"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(256 478) scale(33.28)"
      xlinkHref="#gd_svg__c"
    />
    <use
      width="100%"
      height="100%"
      x={100}
      transform="translate(16.4 442.2)"
      xlinkHref="#gd_svg__d"
    />
  </svg>
);

export default SvgGd;
