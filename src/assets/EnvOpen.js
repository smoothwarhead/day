import React from "react";

function EnvOpen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="610"
      height="527"
      viewBox="0 0 610 527"
    >
      <defs>
        <filter
          id="Polygon_1"
          width="610"
          height="267"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="10"></feOffset>
          <feGaussianBlur result="blur" stdDeviation="10"></feGaussianBlur>
          <feFlood floodColor="#24261e"></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="Polygon_2"
          width="550"
          height="170"
          x="30"
          y="227"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="10"></feOffset>
          <feGaussianBlur result="blur-2" stdDeviation="25"></feGaussianBlur>
          <feFlood floodOpacity="0.161" result="color"></feFlood>
          <feComposite
            in="SourceGraphic"
            in2="blur-2"
            operator="out"
          ></feComposite>
          <feComposite in="color" operator="in"></feComposite>
          <feComposite in2="SourceGraphic" operator="in"></feComposite>
        </filter>
      </defs>
      <g data-name="Group 5" transform="translate(-583 -798)">
        <path
          fill="#414436"
          d="M0 0H550V300H0z"
          data-name="Rectangle 11"
          transform="translate(613 1025)"
        ></path>
        <g filter="url(#Polygon_1)" transform="translate(583 798)">
          <path
            fill="#414436"
            d="M275 0l275 207H0z"
            data-name="Polygon 1"
            transform="translate(30 20)"
          ></path>
        </g>
        <g data-type="innerShadowGroup">
          <path
            fill="#414436"
            d="M275 0l275 170H0z"
            data-name="Polygon 2"
            transform="rotate(180 581.5 597.5)"
          ></path>
          <g filter="url(#Polygon_2)" transform="translate(583 798)">
            <path
              fill="#fff"
              d="M275 0l275 170H0z"
              data-name="Polygon 2"
              transform="rotate(180 290 198.5)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default EnvOpen;