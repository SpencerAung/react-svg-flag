import React from "react";

const SvgUz = props => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <path fill="#1eb53a" d="M0 341.3h512V512H0z" />
    <path fill="#0099b5" d="M0 0h512v170.7H0z" />
    <path fill="#ce1126" d="M0 163.8h512v184.4H0z" />
    <path fill="#fff" d="M0 174h512v164H0z" />
    <circle cx={143.4} cy={81.9} r={61.4} fill="#fff" />
    <circle cx={163.8} cy={81.9} r={61.4} fill="#0099b5" />
    <g fill="#fff" transform="translate(278.5 131) scale(2.048)">
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
