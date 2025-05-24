import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import account from "@/assets/accountfinance.jpg";
import manufacture from "@/assets/manufacturer.jpg";
import pharmacuticals from "@/assets/pharmacuticals.jpg";
import supplychain from "@/assets/supplychain.jpg";
import { cardHover, fadeUp } from "@/lib/animation";
import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Accounting & Finance",
    image: account.src,
  },
  {
    title: "Manufacturing",
    image: manufacture.src,
  },
  {
    title: "Pharmaceuticals",
    image: pharmacuticals.src,
  },
  {
    title: "Supply Chain",
    image: supplychain.src,
  },
];

const IndustriesWeServe = () => {
  const cardsRef = useRef([] as any);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(titleRef.current, { y: -50, opacity: 0, duration: 1 });
  //   gsap.from(descRef.current, { opacity: 0, delay: 0.5, duration: 1 });
  //   cardsRef.current.forEach((card: any, index: number) => {
  //     gsap.fromTo(
  //       card,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //         delay: index * 0.2,
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 80%",
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div className="industries-section">
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-12 mb-4 text-center">
          <h2
            ref={titleRef}
            className="display-4 fw-bold mb-3 text-white text-shadow"
          >
            Industries we serve
          </h2>
          <p ref={descRef} className="lead mb-5 text-light">
            We empower businesses across diverse sectors, including
          </p>
        </div>
      </motion.div>
      {/* <div className="vertical-label">Industries We Serve</div> */}
      <motion.div
        variants={cardHover}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container industries-grid mt-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card"
              ref={(el: any) => (cardsRef.current[index] = el)}
            >
              <img src={industry.image} alt={industry.title} />
              <div className="overlay">
                <h5>{industry.title}</h5>
                <a href="#">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IndustriesWeServe;
