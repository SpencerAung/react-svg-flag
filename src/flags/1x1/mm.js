import React from "react";

const SvgMm = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <path
        id="mm_svg__a"
        fill="#fff"
        d="M.2 0h-.4L0-.5z"
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
    <path fill="#fecb00" d="M0 0h512v170.7H0z" />
    <path fill="#ea2839" d="M0 341.3h512V512H0z" />
    <path fill="#34b233" d="M0 170.7h512v170.6H0z" />
    <use
      width={18}
      height={12}
      x={9}
      y={6.4}
      transform="translate(-127.7) scale(42.66667)"
      xlinkHref="#mm_svg__b"
    />
  </svg>
);

export default SvgMm;
