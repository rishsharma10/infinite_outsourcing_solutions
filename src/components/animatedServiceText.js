import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/carousal.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function AnimateOurService() {
  const textRef = useRef();
  const dotRef = useRef();

  useEffect(() => {
  const dots = dotRef.current;
  const textItems = textRef.current.children;

  // Dots animation: fade, scale, and rotate with scroll
  gsap.fromTo(
    dots,
    { opacity: 0, scale: 0.2, rotate: 0 },
    {
      opacity: 1,
      scale: 1,
      rotate: 360,
      ease: "power1.out",
      scrollTrigger: {
        trigger: dots,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  // Text animation: fade and move up, triggered on every scroll
  gsap.utils.toArray(textItems).forEach((el) => {
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 50%",
          scrub: true, // This is key for continuous scroll-based animation
        },
      }
    );
  });
}, []);


  const OurServices = [
    "Data Science",
    "Data Engineering",
    "Data Analytics",
    "AI & ML Solutions",
    "Big Data Solutions",
  ];

  return (
    <div className={`text-center our-services-content`}>
      <div ref={textRef}>
        {OurServices.map((res, index)=><h1 key={index} className="display-3 mb-4 fw-bold text-white">{res}</h1>)}
      </div>
    </div>
  );
}
