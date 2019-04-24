import React from "react";

const SvgSj = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#ef2b2d" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M180 0h120v480H180z" />
    <path fill="#fff" d="M0 180h640v120H0z" />
    <path fill="#002868" d="M210 0h60v480h-60z" />
    <path fill="#002868" d="M0 210h640v60H0z" />
  </svg>
);

export default SvgSj;
