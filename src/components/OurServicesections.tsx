import { useEffect, useRef } from "react";
// import gsap from "gsap";
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

  // useEffect(() => {
  //   gsap.from(titleRef.current, { y: -50, opacity: 0, duration: 1 });
  //   gsap.from(descRef.current, { opacity: 0, delay: 0.5, duration: 1 });
  //   gsap.from(cardsRef.current, {
  //     y: 50,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.2,
  //     delay: 1,
  //   });
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
    <section className="position-relative text-white our-services">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="row justify-content-between flex-column">
            <div className="col-md-5">
              <h2
                ref={titleRef}
                className="display-4 fw-bold mb-3 text-white text-shadow"
              >
                Our Services
              </h2>
              <p ref={descRef} className="lead mb-4 text-light">
                We offer a comprehensive suite of outsourcing services designed
                for US businesses.
              </p>
            </div>
            <div className="col-md-5 ms-auto">
              <p ref={descRef} className="lead mb-5 text-light fs-16 lh-lg">
                {HOMEPAGE.our_services.service_desc}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="row g-4 justify-content-center our-service-card pt-5">
          {HOMEPAGE.our_services.services.map((service, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3 card-col">
              <div className="flip-card position-relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid w-100 h-100 object-fit-cover position-absolute start-0 top-0 rounded-4"
                />
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h5 className="fw-semibold fs-3">{service.title}</h5>
                  </div>
                  <div className="flip-card-back text-white p-4 d-flex flex-column justify-content-center align-items-center">
                    <p className="mb-3 lh-lg">{service.description}</p>
                    {/* <Button type="button" className="btn btn-primary">{service.cta}</Button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
