import React from "react";

const SvgUz = props => (
  <svg viewBox="0 0 640 480" width="1em" height="1em" {...props}>
    <path fill="#1eb53a" d="M0 320h640v160H0z" />
    <path fill="#0099b5" d="M0 0h640v160H0z" />
    <path fill="#ce1126" d="M0 153.6h640v172.8H0z" />
    <path fill="#fff" d="M0 163.2h640v153.6H0z" />
    <circle cx={134.4} cy={76.8} r={57.6} fill="#fff" />
    <circle cx={153.6} cy={76.8} r={57.6} fill="#0099b5" />
    <g fill="#fff" transform="matrix(1.92 0 0 1.92 261.1 122.9)">
      <g id="uz_svg__e">
        <g id="uz_svg__d">
          <g id="uz_svg__c">
            <g id="uz_svg__b">
              <path id="uz_svg__a" d="M0-6L-1.9-.3 1 .7" />
              <use
                width="100%"
                height="100%"
                transform="scale(-1 1)"
                xlinkHref="#uz_svg__a"
              />
            </g>
            <use
              width="100%"
              height="100%"
              transform="rotate(72)"
              xlinkHref="#uz_svg__b"
            />
          </g>
          <use
            width="100%"
            height="100%"
            transform="rotate(-72)"
            xlinkHref="#uz_svg__b"
          />
          <use
            width="100%"
            height="100%"
            transform="rotate(144)"
            xlinkHref="#uz_svg__c"
          />
        </g>
        <use width="100%" height="100%" y={-24} xlinkHref="#uz_svg__d" />
        <use width="100%" height="100%" y={-48} xlinkHref="#uz_svg__d" />
      </g>
      <use width="100%" height="100%" x={24} xlinkHref="#uz_svg__e" />
      <use width="100%" height="100%" x={48} xlinkHref="#uz_svg__e" />
      <use width="100%" height="100%" x={-48} xlinkHref="#uz_svg__d" />
      <use width="100%" height="100%" x={-24} xlinkHref="#uz_svg__d" />
      <use width="100%" height="100%" x={-24} y={-24} xlinkHref="#uz_svg__d" />
    </g>
  </svg>
);

export default SvgUz;
