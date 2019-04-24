import React from "react";

const SvgJm = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path d="M0 0l320 240L0 480zm640 0L320 240l320 240z" />
      <path fill="#090" d="M0 0l320 240L640 0zm0 480l320-240 320 240z" />
      <path fill="#fc0" d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z" />
      <path fill="#fc0" d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z" />
    </g>
  </svg>
);

export default SvgJm;
