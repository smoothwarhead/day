import React from "react";

function Intro({cName}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="550"
      height="300"
      viewBox="0 0 550 300"
      className={cName}
    >
      <g data-name="Group 19" transform="translate(-604 -90)">
        <path
          fill="#414436"
          d="M0 0H550V300H0z"
          data-name="Rectangle 12"
          transform="translate(604 90)"
        ></path>
        <text
          fill="#e4d5b9"
          data-name="The wedding OFF"
          fontFamily="Aviano-Reg, Aviano"
          fontSize="20"
          transform="translate(757 194)"
        >
          <tspan x="0" y="0">
            THE WEDDING OFF
          </tspan>
        </text>
        <text
          fill="#e4d5b9"
          data-name="Success &amp; Simeon"
          fontFamily="StorefrontPro, Storefront Pro"
          fontSize="48"
          transform="translate(696 270)"
        >
          <tspan x="0" y="0">
            Success &amp; Simeon
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default Intro;