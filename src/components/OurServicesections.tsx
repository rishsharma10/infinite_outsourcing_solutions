import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { HOMEPAGE } from "@/utils/content";
import styles from '@/styles/ContactSection.module.css'; 
import { fadeUp } from "@/lib/animation";
import { motion } from "framer-motion"

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
        background: "linear-gradient(135deg, #1f2937, #3b82f6)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(6px)",
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
        We offer a comprehensive suite of outsourcing services designed for US businesses.
        </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {HOMEPAGE.our_services.services.map((service, i) => (
            <div
              key={i}
              className="col-12 col-md-6 col-lg-5"
              ref={(el:any) => (cardsRef.current[i] = el)}
            >
              <div
                className="card shadow-lg h-100 overflow-hidden border-0"
                style={{
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotateY(5deg) scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateY(0deg) scale(1)";
                }}
              >
                <div className="position-relative" style={{ height: "250px" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-100 h-100"
                  />
                </div>
                <div className="card-body text-start p-4">
                  <h5 className="card-title text-white fw-semibold fs-4">
                    {service.title}
                  </h5>
                  <p className="card-text text-light mb-3">
                    {service.description}
                  </p>
                  <Button
                      type="submit" 
                      className={styles.submitButton}
                    >
                     {service.cta}
                    </Button>
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
