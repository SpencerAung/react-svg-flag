import React from "react";

const SvgGg = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#fff" d="M0 0h512v512H0z" />
    <path fill="#e8112d" d="M192 0h128v512H192z" />
    <path fill="#e8112d" d="M0 187.7h512v136.6H0z" />
    <path
      id="gg_svg__a"
      fill="#f9dd16"
      d="M46 305.8l23.3-25h210v-49.7h-210L46 206.2z"
    />
    <use
      width={36}
      height={24}
      transform="matrix(0 1.06667 -.9375 0 496 -17)"
      xlinkHref="#gg_svg__a"
    />
    <use
      width={36}
      height={24}
      transform="matrix(0 -1.06667 .9375 0 16 529)"
      xlinkHref="#gg_svg__a"
    />
    <use
      width={36}
      height={24}
      transform="rotate(180 256 256)"
      xlinkHref="#gg_svg__a"
    />
  </svg>
);

export default SvgGg;
