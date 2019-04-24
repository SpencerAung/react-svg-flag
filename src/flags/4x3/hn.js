import React from "react";

const SvgHn = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#0073cf" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
    <g
      id="hn_svg__c"
      fill="#0073cf"
      transform="translate(320 240) scale(26.66665)"
    >
      <g id="hn_svg__b">
        <path id="hn_svg__a" d="M-.3 0l.5.1L0-1z" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#hn_svg__a"
        />
      </g>
      <use
        width="100%"
        height="100%"
        transform="rotate(72)"
        xlinkHref="#hn_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-72)"
        xlinkHref="#hn_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(144)"
        xlinkHref="#hn_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144)"
        xlinkHref="#hn_svg__b"
      />
    </g>
    <use
      width="100%"
      height="100%"
      transform="translate(133.3 -42.7)"
      xlinkHref="#hn_svg__c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(133.3 37.3)"
      xlinkHref="#hn_svg__c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(-133.3 -42.7)"
      xlinkHref="#hn_svg__c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(-133.3 37.3)"
      xlinkHref="#hn_svg__c"
    />
  </svg>
);

export default SvgHn;
