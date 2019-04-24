import React from "react";

const SvgMm = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <path
        id="mm_svg__a"
        fill="#fff"
        d="M0-.5l.2.5h-.4z"
        transform="scale(8.844)"
      />
      <g id="mm_svg__b">
        <use
          width={18}
          height={12}
          transform="rotate(-144)"
          xlinkHref="#mm_svg__a"
        />
        <use
          width={18}
          height={12}
          transform="rotate(-72)"
          xlinkHref="#mm_svg__a"
        />
        <use width={18} height={12} xlinkHref="#mm_svg__a" />
        <use
          width={18}
          height={12}
          transform="rotate(72)"
          xlinkHref="#mm_svg__a"
        />
        <use
          width={18}
          height={12}
          transform="rotate(144)"
          xlinkHref="#mm_svg__a"
        />
      </g>
    </defs>
    <path fill="#fecb00" d="M0-.1h640V160H0z" />
    <path fill="#ea2839" d="M0 320h640v160H0z" />
    <path fill="#34b233" d="M0 160h640v160H0z" />
    <use
      width={18}
      height={12}
      x={9}
      y={6.4}
      transform="matrix(40 0 0 40 -40 0)"
      xlinkHref="#mm_svg__b"
    />
  </svg>
);

export default SvgMm;
