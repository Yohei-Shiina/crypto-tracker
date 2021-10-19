import React from "react";

export default function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="299"
      height="297"
      viewBox="0 0 299 297"
      className="crypto_logo"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            fill="none"
            stroke="#707070"
            strokeWidth="1"
            d="M0 0H299V297H0z"
            transform="translate(332 569)"
          ></path>
        </clipPath>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="0.869"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#ff0076"></stop>
          <stop offset="1" stopColor="#ff0076" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="0.5"
          x2="0.497"
          y2="0.859"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#0076ff"></stop>
          <stop offset="1" stopColor="#0076ff" stopOpacity="0"></stop>
        </linearGradient>
        <filter
          id="out_blue"
          width="249.064"
          height="258.215"
          x="-54.678"
          y="111.89"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3"></feOffset>
          <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
          <feFlood floodOpacity="0.161"></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <linearGradient
          id="linear-gradient-3"
          x1="0.5"
          x2="0.502"
          y2="0.861"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#ff9300"></stop>
          <stop offset="1" stopColor="#ff9300" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <g transform="translate(-332 -569)">
        <g clipPath="url(#clip-path)">
          <g fill="url(#linear-gradient)" transform="translate(389 589)">
            <path d="M184.133 159.5H.867L92.5.999 184.133 159.5z"></path>
            <path
              fill="#ff0076"
              d="M92.5 1.998L1.733 159h181.534L92.5 1.998M92.5 0L185 160H0L92.5 0z"
            ></path>
          </g>
          <g fill="rgba(255,255,255,0)">
            <path
              d="M114.136 99.5H.864L57.5 1.003 114.136 99.5z"
              transform="translate(424 629)"
            ></path>
            <path
              fill="#ff0076"
              d="M57.5 2.006L1.729 99H113.27L57.5 2.006M57.5 0L115 100H0L57.5 0z"
              transform="translate(424 629)"
            ></path>
          </g>
          <g filter="url(#out_blue)" transform="translate(332 569)">
            <g
              fill="url(#linear-gradient-2)"
              data-name="out_blue"
              transform="rotate(-120 126.785 165.534)"
            >
              <path d="M184.133 159.5H.867L92.5.999 184.133 159.5z"></path>
              <path
                fill="#0076ff"
                d="M92.5 1.998L1.733 159h181.534L92.5 1.998M92.5 0L185 160H0L92.5 0z"
              ></path>
            </g>
          </g>
          <g fill="rgba(255,255,255,0)">
            <path
              d="M114.136 99.5H.864L57.5 1.003 114.136 99.5z"
              transform="rotate(-120 451.076 325.3)"
            ></path>
            <path
              fill="#0076ff"
              d="M57.5 2.006L1.729 99H113.27L57.5 2.006M57.5 0L115 100H0L57.5 0z"
              transform="rotate(-120 451.076 325.3)"
            ></path>
          </g>
          <g
            fill="url(#linear-gradient-3)"
            transform="rotate(120 116.95 578.781)"
          >
            <path d="M184.133 159.5H.867L92.5.999 184.133 159.5z"></path>
            <path
              fill="#ff9300"
              d="M92.5 1.998L1.733 159h181.534L92.5 1.998M92.5 0L185 160H0L92.5 0z"
            ></path>
          </g>
          <g fill="rgba(255,255,255,0)">
            <path
              d="M114.136 99.5H.864L57.5 1.003 114.136 99.5z"
              transform="rotate(120 87.924 570.096)"
            ></path>
            <path
              fill="#ff9300"
              d="M57.5 2.006L1.729 99H113.27L57.5 2.006M57.5 0L115 100H0L57.5 0z"
              transform="rotate(120 87.924 570.096)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
