import React from "react";

const SvgLr = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="lr_svg__a">
        <path fillOpacity={0.7} d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <g fillRule="evenodd" clipPath="url(#lr_svg__a)">
      <path fill="#fff" d="M0 0h767.9v512H0z" />
      <path fill="#006" d="M0 0h232.7v232.8H0z" />
      <path fill="#c00" d="M0 464.9h767.9V512H0z" />
      <path
        fill="#c00"
        d="M0 465.4h767.9V512H0zm0-92.9h767.9v46.2H0zm0-93.2h766V326H0zM232.7 0h535.1v46.5H232.7zm0 186h535.1v46.8H232.7zm0-92.7h535.1v46.5H232.7z"
      />
      <path
        fill="#fff"
        d="M166.3 177.5l-50.7-31-50.4 31.3 18.7-50.9-50.3-31.4 62.3-.4 19.3-50.7L135 95h62.3l-50.1 31.7 19.1 50.8z"
      />
    </g>
  </svg>
);

export default SvgLr;
