import React from "react";

function EnvClose({cName}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="610"
      height="320"
      viewBox="0 0 610 320"
      className={cName}
    >
      <defs>
        <filter
          id="Polygon_1"
          width="610"
          height="234"
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
          id="Ellipse_2"
          width="80"
          height="80"
          x="269"
          y="128"
          filterUnits="userSpaceOnUse"
        >
          <feOffset></feOffset>
          <feGaussianBlur result="blur-2" stdDeviation="2.5"></feGaussianBlur>
          <feFlood floodColor="#414436" result="color"></feFlood>
          <feComposite
            in="SourceGraphic"
            in2="blur-2"
            operator="out"
          ></feComposite>
          <feComposite in="color" operator="in"></feComposite>
          <feComposite in2="SourceGraphic" operator="in"></feComposite>
        </filter>
      </defs>
      <g data-name="Group 18" transform="translate(-574 -379)">
        <g data-name="Group 4" transform="translate(18 68)">
          <path
            fill="#414436"
            d="M0 0H550V300H0z"
            data-name="Rectangle 11"
            transform="translate(586 331)"
          ></path>
          <g filter="url(#Polygon_1)" transform="translate(556 311)">
            <path
              fill="#414436"
              d="M275 0l275 174H0z"
              data-name="Polygon 1"
              transform="rotate(180 290 97)"
            ></path>
          </g>
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="#e4d5b9"
            data-name="Ellipse 1"
            transform="translate(815 428)"
          ></circle>
          <g data-type="innerShadowGroup">
            <circle
              cx="40"
              cy="40"
              r="40"
              fill="#e4d5b9"
              data-name="Ellipse 2"
              transform="translate(825 439)"
            ></circle>
            <g filter="url(#Ellipse_2)" transform="translate(556 311)">
              <circle
                cx="40"
                cy="40"
                r="40"
                fill="#fff"
                data-name="Ellipse 2"
                transform="translate(269 128)"
              ></circle>
            </g>
          </g>
        </g>
        <text
          fill="#24261e"
          fontFamily="Aviano-Bol, Aviano"
          fontSize="20"
          transform="translate(851 551)"
        >
          <tspan x="0" y="0">
            Open
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default EnvClose;