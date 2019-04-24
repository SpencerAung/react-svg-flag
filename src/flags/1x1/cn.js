import React from "react";

const SvgCn = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <path id="cn_svg__a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
    </defs>
    <path fill="#de2910" d="M0 0h512v512H0z" />
    <use
      width={30}
      height={20}
      transform="matrix(76.8 0 0 76.8 128 128)"
      xlinkHref="#cn_svg__a"
    />
    <use
      width={30}
      height={20}
      transform="rotate(-121 142.6 -47) scale(25.5827)"
      xlinkHref="#cn_svg__a"
    />
    <use
      width={30}
      height={20}
      transform="rotate(-98.1 198 -82) scale(25.6)"
      xlinkHref="#cn_svg__a"
    />
    <use
      width={30}
      height={20}
      transform="rotate(-74 272.4 -114) scale(25.6137)"
      xlinkHref="#cn_svg__a"
    />
    <use
      width={30}
      height={20}
      transform="matrix(16 -19.968 19.968 16 256 230.4)"
      xlinkHref="#cn_svg__a"
    />
  </svg>
);

export default SvgCn;
