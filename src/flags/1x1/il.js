import React from "react";

const SvgIl = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="il_svg__a">
        <path fillOpacity={0.7} d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <g fillRule="evenodd" clipPath="url(#il_svg__a)">
      <path fill="#fff" d="M619.4 512H-112V0h731.4z" />
      <path
        fill="#00c"
        d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
      />
      <path fill="#fff" d="M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z" />
      <path fill="#00c" d="M136 320.6L246.2 129l112.4 190.8-222.6.8z" />
      <path
        fill="#fff"
        d="M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
      />
    </g>
  </svg>
);

export default SvgIl;
