import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
const DrawSvg = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      const paths = container.querySelectorAll('#path');
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: 1,
          pin: true,
        },
      });
  
      paths.forEach((path) => {
        tl.fromTo(
          path,
          { drawSVG: '0%' },
          { drawSVG: '100%', duration: 1 },
          '<' // all at once or stagger
        );
      });
  
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }, []);

  return (
    <div className="containerDrawSvg">
      <div className="container">
        <img
          src="https://i.postimg.cc/X7Nf12CW/backgroundpath.png"
          loading="lazy"
          alt="Line background"
        />

        <svg
          className="svg__shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3000 900"
        >
          <defs>
            <clipPath id="a">
              <path d="M0 0h3000v1000H0z" />
            </clipPath>
          </defs>
          <g clip-path="url(#a)">
            <g className="svg__path" style={{ display: "block" }}>
              <path
                id="path"
                fill="none"
                stroke="#FFB7C5"
                stroke-linecap="round"
                stroke-width="6"
                d="M158.496 812.128c284.97-.77 465.862-14.424 627.504-162.762 126.872-116.37 173.856-109.332 238-126.048 60.474-15.748 72.752-39.248 115.777-38.492 43.613.314 80.008 47.381 120.223 41.126 38.553-5.222 70.107-58.016 116-56.797 44.36.472 76.5 60.08 124 60.013 47.5-.067 81.39-66.59 128-59.396 44.693 6.221 71.61 54.445 112 57.282 44.36 3.658 80.611-51.313 134.446-43.464 42.378 5.287 61.086 24.123 99.554 33.3 13.156 2.958 29.24 3.918 48.49 6.482"
              />
            </g>
            <g className="svg__path" style={{ display: "block" }}>
              <path
                id="path"
                fill="none"
                stroke="#FFDDB7"
                stroke-linecap="round"
                stroke-width="6"
                d="M189.072 655.57C484.45 653.602 638.28 641.694 786 569.632c95.812-46.742 185.691-48.603 238-68.171 41.594-14.97 77.983-14.608 115.765 1.938 52.922 23.503 76.7 28.37 120.235-6.291 41.443-32.967 73.747-40.467 116-4.363 55.337 47.361 79.732 49.142 124 12.334 44.39-36.911 78.456-54.783 128-8.688 46.914 43.594 78.11 37.196 112 15.653 40.393-25.437 65.757-52.011 134.25-15.056 48.896 25.088 73.096 19.861 100.461 14.642 51.107-9.734 112.601-1.488 192.429 29.128"
              />
            </g>
            <g className="svg__path" style={{ display: "block" }}>
              <path
                id="path"
                fill="none"
                stroke="#B1C5FF"
                stroke-linecap="round"
                stroke-width="6"
                d="M226.39 500.018c284.832.004 413.672.038 559.61.278 95.921.155 181.398-9.257 238 6.82 51.62 14.644 75.31-7.436 115.75-21.812 52.881-18.721 84.36 16.868 120.25 35.971 41.22 21.576 71.688-.606 116-36.246s81.75 2.665 123.119 31.642c46.617 32.635 81.881 1.775 128.881-35.944 34.429-28.24 73.702.185 112 28.525 49.944 36.7 88.816.23 134.25-18.77 35.327-14.699 64.43 1.216 99.75 8.348 48.486 9.952 175.246 1.398 282 1.307 30.584-.025 60.192-.041 90.878-.051"
              />
            </g>
            <g className="svg__path" style={{ display: "block" }}>
              <path
                id="path"
                fill="none"
                stroke="#4FABFF"
                stroke-linecap="round"
                stroke-width="6"
                d="M274.03 345.436c232.164 4.102 376.218 20 511.97 81.63 98.208 44.592 179.392 54.564 238 63.409 47.022 7.393 68.163 32.394 115.849 15.126 48.268-17.895 77.73-44.998 120.151-17.023 36.723 24.387 70.5 59.744 116 32.761 44.03-27.385 76.983-67.839 124-40.918 47.017 26.921 77.594 73.716 128 37.854 45.591-32.79 68.366-59.15 112-40.403 43.634 18.749 72.68 57.533 134.25 33.64 48.367-17.516 49.575-27.135 100.394-23.025 64.433 6.607 143.464-2.312 272.82-63.753 87.442-41.162 175.438-61.634 314.074-71.666"
              />
            </g>
            <g className="svg__path" style={{ display: "block" }}>
              <path
                id="path"
                fill="none"
                stroke="#076EFF"
                stroke-linecap="round"
                stroke-width="6"
                d="M335.782 192.032C518.884 202.32 660.616 236.868 786 350.218c120.758 109.391 159.944 112.533 238 125.508 64.63 11.755 74.14 31.043 115.693 39.354 42.58 8.406 64.312-15.861 109.575-36.288 53.104-25.45 86.494 38.88 126.732 50.44 44.846 13.393 77.856-33.914 124-54.318 46.144-20.404 88.436 42.905 128 54.543 38.06 11.015 64.706-28.137 112-50.187 48.923-22.389 87.52 34 134.613 34.905 42.114 1.245 55.555-14.017 99.444-29.365 48.574-16.618 141.993-.06 281.943-139.147 131.998-130.541 267.308-153.437 598.336-157.041"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DrawSvg;
