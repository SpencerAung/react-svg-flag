import React from "react";

const SvgGw = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#ce1126" d="M0 0h220v480H0z" />
    <path fill="#fcd116" d="M220 0h420v240H220z" />
    <path fill="#009e49" d="M220 240h420v240H220z" />
    <g id="gw_svg__b" transform="matrix(80 0 0 80 110 240)">
      <path id="gw_svg__a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
      <use
        width="100%"
        height="100%"
        transform="scale(-1 1)"
        xlinkHref="#gw_svg__a"
      />
    </g>
    <use
      width="100%"
      height="100%"
      transform="rotate(72 110 240)"
      xlinkHref="#gw_svg__b"
    />
    <use
      width="100%"
      height="100%"
      transform="rotate(144 110 240)"
      xlinkHref="#gw_svg__b"
    />
    <use
      width="100%"
      height="100%"
      transform="rotate(-144 110 240)"
      xlinkHref="#gw_svg__b"
    />
    <use
      width="100%"
      height="100%"
      transform="rotate(-72 110 240)"
      xlinkHref="#gw_svg__b"
    />
  </svg>
);

export default SvgGw;
