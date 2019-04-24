import React from "react";

const SvgGr = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="gr_svg__a">
        <path fillOpacity={0.7} d="M0 0h666v666H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#gr_svg__a)" transform="scale(.77)">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#0d5eaf" d="M0 0h999v74H0z" />
        <path fill="#fff" d="M0 74h999v74H0z" />
        <path fill="#0d5eaf" d="M0 148h999v74H0z" />
        <path fill="#fff" d="M0 222h999v74H0z" />
        <path fill="#0d5eaf" d="M0 296h999v74H0z" />
        <path fill="#fff" d="M0 370h999v74H0z" />
        <path fill="#0d5eaf" d="M0 444h999v74H0z" />
        <path fill="#fff" d="M0 518h999v74H0z" />
        <path fill="#0d5eaf" d="M0 592h999v74H0zM0 0h370v370H0z" />
        <g fill="#fff">
          <path d="M148 0h74v370h-74z" />
          <path d="M0 148h370v74H0z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgGr;
