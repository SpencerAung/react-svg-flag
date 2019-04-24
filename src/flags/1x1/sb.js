import React from "react";

const SvgSb = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="sb_svg__a">
        <path fillOpacity={0.7} d="M0 0h496v496H0z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#sb_svg__a)"
      transform="scale(1.0321)"
    >
      <path fill="#0000d6" d="M0 491.4L956.7 0H0v491.4z" />
      <path fill="#006000" d="M992.1 0L26.3 496h965.8V0z" />
      <path fill="#fc0" d="M992.2 0H939L0 470.3V496h53.1l939-469.4V0z" />
      <path
        fill="#fff"
        d="M39 96.1l11.6-33.3-30.2-20.6h37.3L69.2 8.8l11.5 33.4h37.2L87.8 62.8 99.3 96 69.2 75.5zm185.2 0l11.6-33.3-30.2-20.6h37.3l11.5-33.4 11.5 33.4H303l-30 20.6L284.5 96l-30.1-20.6zm0 140l11.6-33.3-30.2-20.6h37.3l11.5-33.4 11.5 33.4H303l-30 20.6 11.6 33.3-30.1-20.6zm-92-69.2l11.5-33.3-30.1-20.6h37.2l11.5-33.3 11.5 33.3h37.3l-30.2 20.6 11.5 33.3-30-20.6zM39 236.1l11.6-33.3-30.2-20.6h37.3l11.5-33.4 11.5 33.4h37.2l-30.1 20.6L99.3 236l-30.1-20.6z"
      />
    </g>
  </svg>
);

export default SvgSb;
