import React from "react";

const SvgGg = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#e8112d" d="M256 0h128v480H256z" />
    <path fill="#e8112d" d="M0 176h640v128H0z" />
    <path
      id="gg_svg__a"
      fill="#f9dd16"
      d="M110 286.7l23.3-23.4h210v-46.6h-210L110 193.3z"
    />
    <use
      width={36}
      height={24}
      transform="rotate(90 320 240)"
      xlinkHref="#gg_svg__a"
    />
    <use
      width={36}
      height={24}
      transform="rotate(-90 320 240)"
      xlinkHref="#gg_svg__a"
    />
    <use
      width={36}
      height={24}
      transform="rotate(180 320 240)"
      xlinkHref="#gg_svg__a"
    />
  </svg>
);

export default SvgGg;
