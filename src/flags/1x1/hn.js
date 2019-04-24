import React from "react";

const SvgHn = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#0073cf" d="M0 0h512v512H0z" />
    <path fill="#fff" d="M0 170.7h512v170.6H0z" />
    <g
      id="hn_svg__c"
      fill="#0073cf"
      transform="translate(256 256) scale(28.44446)"
    >
      <g id="hn_svg__b">
        <path id="hn_svg__a" d="M0-1l-.3 1 .5.1z" />
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
      transform="translate(142.2 -45.5)"
      xlinkHref="#hn_svg__c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(142.2 39.8)"
      xlinkHref="#hn_svg__c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(-142.2 -45.5)"
      xlinkHref="#hn_svg__c"
    />
    <use
      width="100%"
      height="100%"
      transform="translate(-142.2 39.8)"
      xlinkHref="#hn_svg__c"
    />
  </svg>
);

export default SvgHn;
