import React from "react";

const SvgBa = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="ba_svg__a">
        <path fillOpacity={0.7} d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <g fillRule="evenodd" clipPath="url(#ba_svg__a)">
      <path fill="#009" d="M0 0h512v512H0z" />
      <path fill="#fc0" d="M77 0l437 437V0H77z" />
      <path
        fill="#FFF"
        d="M461.4 470.4l-26.1-19.1-26.9 19 10.2-31.2-26.4-19.2h32.7l10.2-31 10 31.1 32.8.1-26.2 19.4 9.7 30.9zm76.7 10.4h-32.7l-10-31.2-10.2 31.1h-32.8l26.4 19.2-10.1 31.2 26.8-19 26.2 19-9.8-30.9 26.2-19.4zM391.8 379.6l26.2-19.4h-32.7L375.2 329 365 360h-32.7l26.4 19.3-10.1 31.1 26.8-19 26.1 19.1-9.7-31zm-60.3-60.4l26.2-19.4-32.8-.1-10-31.2-10.2 31.2-32.7-.1 26.4 19.2-10.2 31.2 26.9-19 26.1 19.1-9.7-31zm-59.7-59.7l26.2-19.4h-32.7l-10.1-31.2L245 240h-32.7l26.4 19.2-10.1 31.2 26.8-19 26.1 19-9.7-30.9zm-60.4-60.3l26.2-19.3-32.8-.1-10-31.2-10.2 31.2-32.7-.1 26.4 19.2-10.2 31.2 26.9-19 26.1 19-9.7-30.8zm-59.7-59.9L178 120l-32.7-.1-10-31.2-10.3 31.1H92.2l26.4 19.2-10.1 31.2 26.8-19 26.1 19-9.7-30.9zm-60-60L118 60l-32.7-.1-10-31.2L65 59.8H32.2L58.6 79l-10.1 31.2 26.8-19 26.2 19-9.8-30.9zm-60-60L58 0 25.2-.1l-10-31.2L4.8-.2h-32.7L-1.4 19l-10.1 31.2 26.8-19 26.1 19-9.7-30.9z"
      />
    </g>
  </svg>
);

export default SvgBa;
