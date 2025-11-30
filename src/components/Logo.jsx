import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 select-none cursor-pointer">
      <svg
        className="
        drop-shadow-md
        w-7 h-7
        sm:w-8 sm:h-8
        md:w-9 md:h-9
        lg:w-10 lg:h-10
        xl:w-11 xl:h-11
        "
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 30L24 4L42 30H30L24 22L18 30H6Z" fill="url(#grad)" />
        <defs>
          <linearGradient
            id="grad"
            x1="6"
            y1="4"
            x2="42"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EA5E9" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>

      <span
        className="
          font-bold font-playfair tracking-tight
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl text-indigo-950
        "
      >
        Quick<span className="text-sky-600  sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl">Pay</span>
      </span>
    </div>
  );
};

export default Logo;
