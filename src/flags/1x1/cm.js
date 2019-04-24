import React from "react";

const SvgCm = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#007a5e" d="M0 0h170.7v512H0z" />
    <path fill="#ce1126" d="M170.7 0h170.6v512H170.7z" />
    <path fill="#fcd116" d="M341.3 0H512v512H341.3z" />
    <g fill="#fcd116" transform="translate(256 256) scale(5.6889)">
      <g id="cm_svg__b">
        <path id="cm_svg__a" d="M0-8L-2.5-.4 1.3.9z" />
        <use
          width="100%"
          height="100%"
          transform="scale(-1 1)"
          xlinkHref="#cm_svg__a"
        />
      </g>
      <use
        width="100%"
        height="100%"
        transform="rotate(72)"
        xlinkHref="#cm_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(144)"
        xlinkHref="#cm_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-144)"
        xlinkHref="#cm_svg__b"
      />
      <use
        width="100%"
        height="100%"
        transform="rotate(-72)"
        xlinkHref="#cm_svg__b"
      />
    </g>
  </svg>
);

export default SvgCm;
