import React from "react";

const SvgTz = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="tz_svg__a">
        <path fillOpacity={0.7} d="M102.9 0h496v496H103z" />
      </clipPath>
    </defs>
    <g clipPath="url(#tz_svg__a)" transform="translate(-106.2) scale(1.0321)">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#09f" d="M0 0h744.1v496H0z" />
        <path fill="#090" d="M0 0h744.1L0 496V0z" />
        <path d="M0 496h165.4L744 103.4V0H578.7L0 392.7v103.4z" />
        <path
          fill="#ff0"
          d="M0 378L567 0h56L0 415.3v-37.2zm121.1 118l623-415.3V118L177 496h-55.9z"
        />
      </g>
    </g>
  </svg>
);

export default SvgTz;
