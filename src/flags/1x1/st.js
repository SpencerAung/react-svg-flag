import React from "react";

const SvgSt = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#12ad2b" d="M0 0h512v512H0z" />
    <path fill="#ffce00" d="M0 146.3h512v219.4H0z" />
    <path fill="#d21034" d="M0 0v512l192-256" />
    <g id="st_svg__c" transform="translate(276.9 261.5) scale(.33167)">
      <g id="st_svg__b">
        <path id="st_svg__a" d="M0-200V0h100" transform="rotate(18 0 -200)" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#st_svg__a"
        />
      </g>
      <use
        width="100%"
        height="100%"
        transform="rotate(72)"
        xlinkHref="#st_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(144)"
        xlinkHref="#st_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144)"
        xlinkHref="#st_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-72)"
        xlinkHref="#st_svg__b"
      />
    </g>
    <use
      width="100%"
      height="100%"
      x={700}
      transform="translate(-550.9)"
      xlinkHref="#st_svg__c"
    />
  </svg>
);

export default SvgSt;
