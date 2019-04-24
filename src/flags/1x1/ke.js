import React from "react";

const SvgKe = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <path
        id="ke_svg__a"
        strokeMiterlimit={10}
        d="M-28.6 47.5l1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
      />
    </defs>
    <path fill="#fff" d="M0 0h512v512H0z" />
    <path d="M0 0h512v153.6H0z" />
    <path fill="#060" d="M0 358.4h512V512H0z" />
    <g id="ke_svg__b" transform="matrix(3.2 0 0 3.2 255.8 256)">
      <use width="100%" height="100%" stroke="#000" xlinkHref="#ke_svg__a" />
      <use width="100%" height="100%" fill="#fff" xlinkHref="#ke_svg__a" />
    </g>
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 511.7 0)"
      xlinkHref="#ke_svg__b"
    />
    <path
      fill="#b00"
      d="M255.8 102.4c-19.2 0-51.2 51.2-60.8 76.8H0v153.6h195c9.7 25.6 41.7 76.8 60.9 76.8 19.2 0 51.2-51.2 60.8-76.8H512V179.2H316.6c-9.6-25.6-41.6-76.8-60.8-76.8z"
    />
    <path
      id="ke_svg__c"
      d="M316.6 332.8a220 220 0 0 0 16-76.8 220 220 0 0 0-16-76.8 220 220 0 0 0-16 76.8 220 220 0 0 0 16 76.8"
    />
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 511.7 0)"
      xlinkHref="#ke_svg__c"
    />
    <g fill="#fff" transform="matrix(3.2 0 0 3.2 255.8 256)">
      <ellipse rx={4} ry={6} />
      <path id="ke_svg__d" d="M1 5.8s4 8 4 21-4 21-4 21z" />
      <use
        width="100%"
        height="100%"
        transform="scale(-1)"
        xlinkHref="#ke_svg__d"
      />
      <use
        width="100%"
        height="100%"
        transform="scale(-1 1)"
        xlinkHref="#ke_svg__d"
      />
      <use
        width="100%"
        height="100%"
        transform="scale(1 -1)"
        xlinkHref="#ke_svg__d"
      />
    </g>
  </svg>
);

export default SvgKe;
