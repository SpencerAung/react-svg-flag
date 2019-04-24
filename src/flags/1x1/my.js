import React from "react";

const SvgMy = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#cc0001" d="M0 0h512v512H0z" />
    <path id="my_svg__a" fill="#fff" d="M0 475.5h512V512H0z" />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -73.1)"
      xlinkHref="#my_svg__a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -146.3)"
      xlinkHref="#my_svg__a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -219.4)"
      xlinkHref="#my_svg__a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -292.6)"
      xlinkHref="#my_svg__a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -365.7)"
      xlinkHref="#my_svg__a"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(0 -438.9)"
      xlinkHref="#my_svg__a"
    />
    <path fill="#010066" d="M0 0h320v292.6H0z" />
    <g fill="#fc0">
      <path d="M123.8 51.9a93 93 0 0 0-93.2 92.9 93 93 0 0 0 143.7 78.1 82.7 82.7 0 0 1-27 4.5 82.5 82.5 0 0 1-82.7-82.3c0-45.5 37-82.4 82.6-82.4a82.6 82.6 0 0 1 28.7 5A93 93 0 0 0 124 52z" />
      <path d="M278.4 193.2L239 172.7l11.6 41.9-26.2-35-8.2 42.6-8-42.7-26.5 35 11.8-41.9-39.3 20.4 29.2-32.8-44.5 1.7 40.9-17.1-40.9-17.3 44.5 1.8-29-32.9 39.2 20.5L182 75l26.2 35 8.2-42.6 8 42.7L251 75l-11.8 42 39.3-20.4-29.2 32.8 44.5-1.7-40.9 17.2 40.9 17.2-44.5-1.8z" />
    </g>
  </svg>
);

export default SvgMy;
