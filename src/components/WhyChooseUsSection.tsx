import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import { HOMEPAGE } from "@/utils/content";
import { fadeUp, slideInLeft } from "@/lib/animation";
gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([] as any);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    cardsRef.current.forEach((card: any, index: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const features = HOMEPAGE.why_choose_us;

  return (
    <section
      ref={sectionRef}
      className="min-vh-100 py-5 px-3 position-relative"
      // className="min-vh-100 py-5 px-3 bg-gradient bg-light position-relative"
    >
      <div className="container">
        <motion.div
          variants={slideInLeft}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 text-white fw-bold text-center mb-5 text-primary">
            Why Choose Us?
          </h2>
        </motion.div>
        <div className="position-relative">
          <div
            className="position-absolute top-0 start-50 translate-middle-x bg-white"
            style={{ width: "4px", height: "100%" }}
          ></div>
          <motion.div
            variants={slideInLeft}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  ref={(el: any) => (cardsRef.current[i] = el)}
                  className={`row align-items-center mb-3  ${
                    isEven ? "" : "flex-row-reverse "
                  }`}
                >
                  <div className="col-md-6">
                    <div className="whychooseusecardtransparent rounded-4 shadow p-4 d-flex align-items-center gap-4 h-100">
                      <div className="text-white bg-opacity-10 text-primary p-3 rounded-circle">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-2">{feature.title}</h4>
                        <p className="mb-0 text-white">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
