"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils.js";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);

    children.forEach((child) =>
      scrollerRef.current.appendChild(child.cloneNode(true))
    );

    updateDirection();
    updateSpeed();
    setStart(true);
  }

  const updateDirection = () => {
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const updateSpeed = () => {
    const dur = speed === "fast" ? "10s" : speed === "normal" ? "15s" : "25s";
    containerRef.current.style.setProperty("--animation-duration", dur);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl overflow-hidden px-3 sm:px-4 md:px-6 lg:px-0 [mask:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 gap-4 sm:gap-6 lg:gap-8 py-2 sm:py-3 md:py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center h-12 sm:h-14 md:h-16 lg:h-20 px-4 sm:px-5 md:px-6 rounded-2xl shadow-sm"
          >
            <img
              src={item.logo}
              alt={item.alt || "Company logo"}
              className="h-6 sm:h-7 md:h-8 lg:h-10 object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
            />
            {item.name && (
              <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-neutral-700 dark:text-neutral-200">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
