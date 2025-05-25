import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/carousal.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const textRef = useRef();
  const dotRef = useRef();

  useEffect(() => {
    const dots = dotRef.current;

    gsap.fromTo(
      dots,
      { opacity: 0, scale: 0.2, rotate: 0 },
      {
        opacity: 1,
        scale: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: dots,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.from(textRef.current.children, {
      y: 100,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className={`text-center footer-content`}>
      <div ref={dotRef} className={styles.dots}></div>
      <div ref={textRef}>
        <h1 className="display-3 fw-bold text-white">BE IN TOUCH.</h1>
        <h1 className="display-3 fw-bold text-white">BE DATA</h1>
        <h1 className="display-3 fw-bold text-white">DRIVEN.</h1>

        <p className="text-white fs-14">
          TheCUBE Madrid, C/ Rufino González 25 28037, Madrid – España. + 34 673
          842 174 | info@mioti.es
        </p>
      
      </div>
    </div>
  );
}
