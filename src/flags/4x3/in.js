import React from "react";

const SvgIn = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#f93" d="M0 0h640v160H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
    <path fill="#128807" d="M0 320h640v160H0z" />
    <g transform="matrix(3.2 0 0 3.2 320 240)">
      <circle r={20} fill="#008" />
      <circle r={17.5} fill="#fff" />
      <circle r={3.5} fill="#008" />
      <g id="in_svg__d">
        <g id="in_svg__c">
          <g id="in_svg__b">
            <g id="in_svg__a" fill="#008">
              <circle r={0.9} transform="rotate(7.5 -8.8 133.5)" />
              <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z" />
            </g>
            <use
              width="100%"
              height="100%"
              transform="rotate(15)"
              xlinkHref="#in_svg__a"
            />
          </g>
          <use
            width="100%"
            height="100%"
            transform="rotate(30)"
            xlinkHref="#in_svg__b"
          />
        </g>
        <use
          width="100%"
          height="100%"
          transform="rotate(60)"
          xlinkHref="#in_svg__c"
        />
      </g>
      <use
        width="100%"
        height="100%"
        transform="rotate(120)"
        xlinkHref="#in_svg__d"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-120)"
        xlinkHref="#in_svg__d"
      />
    </g>
  </svg>
);

export default SvgIn;
