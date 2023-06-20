import React from 'react';

export default function HeroGraphic(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w} // added size here
      height={props.h} // added size here
      viewBox="0 0 685 575"
      fill="none"
    >
      <g filter="url(#filter0_d_60_23)">
        <rect x="133" y="287" width="265" height="280" fill="#2B0060" />
      </g>
      <g filter="url(#filter1_d_60_23)">
        <rect
          x="2"
          y="147"
          width="265"
          height="280"
          rx="132.5"
          fill="#5F077D"
        />
      </g>
      <path
        d="M243.359 76.5481C253.14 68.8231 264.131 65.6772 276.333 67.1103C288.004 68.4812 297.819 74.2055 305.778 84.2833L419.196 227.891C430.9 242.711 444.755 243.801 460.761 231.16L498.997 200.962L525.684 234.752L487.448 264.95C471.442 277.591 469.291 291.322 480.996 306.142L594.414 449.75C602.373 459.828 605.667 470.702 604.296 482.373C602.863 494.574 597.256 504.538 587.474 512.263L518.116 567.04L493.887 536.362L551.686 490.714C559.689 484.394 560.179 476.787 553.156 467.895L446.41 332.735C437.983 322.064 434.158 311.128 434.936 299.925C435.418 288.956 440.846 279.375 451.22 271.182L454.332 268.724L449.416 262.5L446.304 264.958C435.93 273.151 425.352 276.211 414.57 274.138C403.492 272.299 393.739 266.044 385.312 255.373L278.566 120.213C271.543 111.321 264.03 110.035 256.028 116.356L198.229 162.004L174 131.326L243.359 76.5481Z"
        fill="#350078"
      />
      <defs>
        <filter
          id="filter0_d_60_23"
          x="129"
          y="287"
          width="273"
          height="288"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_60_23"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_60_23"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_60_23"
          x="0"
          y="147"
          width="269"
          height="288"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_60_23"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_60_23"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
