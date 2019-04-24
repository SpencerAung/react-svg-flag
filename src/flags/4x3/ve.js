import React from "react";

const SvgVe = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <defs>
      <g id="ve_svg__d" transform="translate(0 -36)">
        <g id="ve_svg__c">
          <g id="ve_svg__b">
            <path id="ve_svg__a" fill="#fff" d="M0-5L-1.5-.2l2.8.9z" />
            <use
              width={180}
              height={120}
              transform="scale(-1 1)"
              xlinkHref="#ve_svg__a"
            />
          </g>
          <use
            width={180}
            height={120}
            transform="rotate(72)"
            xlinkHref="#ve_svg__b"
          />
        </g>
        <use
          width={180}
          height={120}
          transform="rotate(-72)"
          xlinkHref="#ve_svg__b"
        />
        <use
          width={180}
          height={120}
          transform="rotate(144)"
          xlinkHref="#ve_svg__c"
        />
      </g>
    </defs>
    <path fill="#cf142b" d="M0 0h640v480H0z" />
    <path fill="#00247d" d="M0 0h640v320H0z" />
    <path fill="#fc0" d="M0 0h640v160H0z" />
    <g id="ve_svg__f" transform="matrix(4 0 0 4 320 336)">
      <g id="ve_svg__e">
        <use
          width={180}
          height={120}
          transform="rotate(10)"
          xlinkHref="#ve_svg__d"
        />
        <use
          width={180}
          height={120}
          transform="rotate(30)"
          xlinkHref="#ve_svg__d"
        />
      </g>
      <use
        width={180}
        height={120}
        transform="rotate(40)"
        xlinkHref="#ve_svg__e"
      />
    </g>
    <use
      width={180}
      height={120}
      transform="rotate(-80 320 336)"
      xlinkHref="#ve_svg__f"
    />
  </svg>
);

export default SvgVe;
