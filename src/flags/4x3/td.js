import React from "react";

const SvgTd = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path fill="#000067" d="M0 0h214v480H0z" />
      <path fill="red" d="M426 0h214v480H426z" />
      <path fill="#ff0" d="M214 0h212v480H214z" />
    </g>
  </svg>
);

export default SvgTd;
