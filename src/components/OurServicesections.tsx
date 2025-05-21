import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HOMEPAGE } from "@/utils/content";
import styles from "@/styles/ContactSection.module.css";
import { fadeUp } from "@/lib/animation";
import { motion } from "framer-motion";

export default function OurServicesSections() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([] as any);

  useEffect(() => {
    gsap.from(titleRef.current, { y: -50, opacity: 0, duration: 1 });
    gsap.from(descRef.current, { opacity: 0, delay: 0.5, duration: 1 });
    // gsap.from(cardsRef.current, {
    //   y: 50,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.2,
    //   delay: 1,
    // });
    cardsRef.current.forEach((card: any, index: number) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="position-relative py-5 px-3 text-white"
      style={{
        //   backgroundImage: "url(`https://img.freepik.com/free-vector/gradient-yellow-color-background-modern-design-abstract_343694-2437.jpg`)",
        // background: "linear-gradient(135deg, #1f2937, #3b82f6)",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        backdropFilter: "blur(1px)",
      }}
    >
      <div className="container text-center">
        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            ref={titleRef}
            className="display-4 fw-bold mb-3 text-white text-shadow"
          >
            Our Services
          </h2>
          <p ref={descRef} className="lead mb-5 text-light">
            We offer a comprehensive suite of outsourcing services designed for
            US businesses.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center our-service-card">
          {HOMEPAGE.our_services.services.map((service, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-5">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="flip-card-back text-white p-4 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="fw-semibold fs-4">{service.title}</h5>
                    <p className="mb-3">{service.description}</p>
                    {/* <Button type="button" className="btn btn-primary">{service.cta}</Button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p ref={descRef} className="lead my-5 text-light">
          {HOMEPAGE.our_services.service_desc}
        </p>
      </div>
    </div>
  );
}
