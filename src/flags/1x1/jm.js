import React from "react";

const SvgJm = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path d="M0 0l256 256L0 512zm512 0L256 256l256 256z" />
      <path fill="#090" d="M0 0l256 256L512 0zm0 512l256-256 256 256z" />
      <path fill="#fc0" d="M512 0h-47.7L0 464.3V512h47.7L512 47.7z" />
      <path fill="#fc0" d="M0 0v47.7L464.3 512H512v-47.7L47.7 0z" />
    </g>
  </svg>
);

export default SvgJm;
