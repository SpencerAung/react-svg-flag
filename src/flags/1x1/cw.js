import React from "react";

const SvgCw = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <path
        id="cw_svg__b"
        d="M0-1l.2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z"
      />
      <clipPath id="cw_svg__a">
        <path fillOpacity={0.7} d="M0 0h9000v9000H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#cw_svg__a)" transform="scale(.057)">
      <path fill="#002b7f" d="M0 0h13500v9000H0z" />
      <path fill="#f9e814" d="M0 5625h13500v1125H0z" />
      <use
        width={13500}
        height={9000}
        x={2}
        y={2}
        fill="#fff"
        transform="scale(750)"
        xlinkHref="#cw_svg__b"
      />
      <use
        width={13500}
        height={9000}
        x={3}
        y={3}
        fill="#fff"
        transform="scale(1000)"
        xlinkHref="#cw_svg__b"
      />
    </g>
  </svg>
);

export default SvgCw;
