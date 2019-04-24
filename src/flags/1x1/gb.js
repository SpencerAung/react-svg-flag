import React from "react";

const SvgGb = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="gb_svg__a">
        <path fillOpacity={0.7} d="M250 0h500v500H250z" />
      </clipPath>
    </defs>
    <g clipPath="url(#gb_svg__a)" transform="translate(-256) scale(1.024)">
      <g strokeWidth="1pt">
        <path fill="#012169" d="M0 0h1000v500H0z" />
        <path
          fill="#fff"
          d="M0 0v55.9L888.2 500H1000v-55.9L111.8.1H0zm1000 0v55.9L111.8 500H0v-55.9L888.2 0H1000z"
        />
        <path
          fill="#fff"
          d="M416.7 0v500h166.6V0H416.7zM0 166.7v166.6h1000V166.7H0z"
        />
        <path
          fill="#c8102e"
          d="M0 200v100h1000V200H0zM450 0v500h100V0H450zM0 500l333.3-166.7H408L74.5 500H0zM0 0l333.3 166.7h-74.5L0 37.3V0zm592.1 166.7L925.5 0h74.5L666.7 166.7H592zm408 333.3L666.6 333.3h74.5L1000 462.7V500z"
        />
      </g>
    </g>
  </svg>
);

export default SvgGb;
