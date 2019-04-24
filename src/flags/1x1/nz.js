import React from "react";

const SvgNz = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <defs>
      <g id="nz_svg__b">
        <g id="nz_svg__a">
          <path d="M0 0v.5L1 0z" transform="translate(0 -.3)" />
          <path d="M0 0v-.5L1 0z" transform="rotate(-36 .5 -.2)" />
        </g>
        <use transform="scale(-1 1)" xlinkHref="#nz_svg__a" />
        <use transform="rotate(72 0 0)" xlinkHref="#nz_svg__a" />
        <use transform="rotate(-72 0 0)" xlinkHref="#nz_svg__a" />
        <use transform="scale(-1 1) rotate(72)" xlinkHref="#nz_svg__a" />
      </g>
      <clipPath id="nz_svg__c">
        <path d="M0 0h600v300H0z" />
      </clipPath>
      <clipPath id="nz_svg__d">
        <path d="M0 0l300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
      </clipPath>
    </defs>
    <path fill="#00247d" fillRule="evenodd" d="M0 0h512v512H0z" />
    <g transform="translate(-148.7 134.5) scale(.60566)">
      <use
        width="100%"
        height="100%"
        fill="#fff"
        transform="matrix(45.4 0 0 45.4 900 120)"
        xlinkHref="#nz_svg__b"
      />
      <use
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="matrix(30 0 0 30 900 120)"
        xlinkHref="#nz_svg__b"
      />
    </g>
    <g transform="rotate(82 393.4 127.1) scale(.60566)">
      <use
        width="100%"
        height="100%"
        fill="#fff"
        transform="rotate(-82 519 -457.7) scale(40.4)"
        xlinkHref="#nz_svg__b"
      />
      <use
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="rotate(-82 519 -457.7) scale(25)"
        xlinkHref="#nz_svg__b"
      />
    </g>
    <g transform="rotate(82 393.4 127.1) scale(.60566)">
      <use
        width="100%"
        height="100%"
        fill="#fff"
        transform="rotate(-82 668.6 -327.7) scale(45.4)"
        xlinkHref="#nz_svg__b"
      />
      <use
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="rotate(-82 668.6 -327.7) scale(30)"
        xlinkHref="#nz_svg__b"
      />
    </g>
    <g transform="translate(-148.7 134.5) scale(.60566)">
      <use
        width="100%"
        height="100%"
        fill="#fff"
        transform="matrix(50.4 0 0 50.4 900 480)"
        xlinkHref="#nz_svg__b"
      />
      <use
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="matrix(35 0 0 35 900 480)"
        xlinkHref="#nz_svg__b"
      />
    </g>
    <path
      stroke="#fff"
      strokeWidth={60}
      d="M0 0l600 300M0 300L600 0"
      clipPath="url(#nz_svg__c)"
      transform="scale(.52004 .78924)"
    />
    <path
      stroke="#cc142b"
      strokeWidth={40}
      d="M0 0l600 300M0 300L600 0"
      clipPath="url(#nz_svg__d)"
      transform="scale(.52004 .78924)"
    />
    <path
      style={{
        lineHeight: "normal",
        textIndent: 0,
        textAlign: "start",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        textTransform: "none",
        blockProgression: "tb",
        isolation: "auto",
        mixBlendMode: "normal"
      }}
      fill="#fff"
      d="M125.7 0v88H-.1v60.7h125.8v88h60.6v-88h125.8V88.1H186.4V0h-60.7z"
      clipPath="url(#nz_svg__c)"
      color="#000"
      fontFamily="sans-serif"
      fontWeight={400}
      overflow="visible"
    />
    <path
      style={{
        lineHeight: "normal",
        textIndent: 0,
        textAlign: "start",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        textTransform: "none",
        blockProgression: "tb",
        isolation: "auto",
        mixBlendMode: "normal"
      }}
      fill="#cc142b"
      d="M137.8 0v100.2H0v36.4h138v100.2h36.3V136.6h137.9v-36.4h-138V0h-36.4z"
      color="#000"
      fontFamily="sans-serif"
      fontWeight={400}
      overflow="visible"
    />
  </svg>
);

export default SvgNz;
