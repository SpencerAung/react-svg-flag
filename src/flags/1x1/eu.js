import React from "react";

const SvgEu = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <g id="eu_svg__d">
        <g id="eu_svg__b">
          <path id="eu_svg__a" d="M0-1l-.3 1 .5.1z" />
          <use transform="scale(-1 1)" xlinkHref="#eu_svg__a" />
        </g>
        <g id="eu_svg__c">
          <use transform="rotate(72)" xlinkHref="#eu_svg__b" />
          <use transform="rotate(144)" xlinkHref="#eu_svg__b" />
        </g>
        <use transform="scale(-1 1)" xlinkHref="#eu_svg__c" />
      </g>
    </defs>
    <path fill="#039" d="M0 0h512v512H0z" />
    <g fill="#fc0" transform="translate(256 258.4) scale(25.28395)">
      <use width="100%" height="100%" y={-6} xlinkHref="#eu_svg__d" />
      <use width="100%" height="100%" y={6} xlinkHref="#eu_svg__d" />
      <g id="eu_svg__e">
        <use width="100%" height="100%" x={-6} xlinkHref="#eu_svg__d" />
        <use
          width="100%"
          height="100%"
          transform="rotate(-144 -2.3 -2.1)"
          xlinkHref="#eu_svg__d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(144 -2.1 -2.3)"
          xlinkHref="#eu_svg__d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(72 -4.7 -2)"
          xlinkHref="#eu_svg__d"
        />
        <use
          width="100%"
          height="100%"
          transform="rotate(72 -5 .5)"
          xlinkHref="#eu_svg__d"
        />
      </g>
      <use
        width="100%"
        height="100%"
        transform="scale(-1 1)"
        xlinkHref="#eu_svg__e"
      />
    </g>
  </svg>
);

export default SvgEu;
