import React from "react";

const SvgGw = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#ce1126" d="M0 0h160v512H0z" />
    <path fill="#fcd116" d="M160 0h352v256H160z" />
    <path fill="#009e49" d="M160 256h352v256H160z" />
    <g transform="translate(-46.2 72.8) scale(.7886)">
      <g id="gw_svg__b" transform="matrix(80 0 0 80 160 240)">
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
        transform="rotate(72 160 240)"
        xlinkHref="#gw_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(144 160 240)"
        xlinkHref="#gw_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144 160 240)"
        xlinkHref="#gw_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-72 160 240)"
        xlinkHref="#gw_svg__b"
      />
    </g>
  </svg>
);

export default SvgGw;
