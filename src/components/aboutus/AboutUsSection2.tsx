import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animation";
import { SectionReveal } from "@/components/PageTransition";
import { useEffect, useRef } from "react";
import { HOMEPAGE } from "@/utils/content";

export default function AboutUsSection2() {
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
    <section className="position-relative min-vh-100 d-flex align-items-center pt-5 mt-5">
      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-n1">
        <div className="container">
          <div className="row gy-3">
            <motion.div variants={fadeUp}>
              <div className="col-12 mb-4">
                <h2 className="fw-semibold text-primary">About Us</h2>
                <hr />
              </div>
            </motion.div>

            <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-opacity-10"></div>

            <motion.div
              className="position-absolute rounded-circle bg-primary bg-opacity-10"
              style={{
                width: "18rem",
                height: "18rem",
                top: "5rem",
                right: "10%",
                filter: "blur(100px)",
              }}
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="position-absolute rounded-circle bg-purple bg-opacity-10"
              style={{
                width: "20rem",
                height: "20rem",
                bottom: "5rem",
                left: "5%",
                filter: "blur(120px)",
              }}
              animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>

      <div className="container px-4">
        <div className="row align-items-center g-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="col-lg-6"
            variants={slideInLeft}
            animate="visible"
          >
            <SectionReveal>
              {/* <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary mb-3">
                About Us
              </span> */}
              {/* <h1 className="display-4 fw-bold mb-3">
                {HOMEPAGE.about_us.our_story[0]}
              </h1> */}
              <p className="lead text-muted mb-4">
                {HOMEPAGE.about_us.our_story[0]}
              </p>
              <p className="lead text-muted mb-4">
                {HOMEPAGE.about_us.our_story[1]}
              </p>
              <p className="lead text-muted mb-4">
                {HOMEPAGE.about_us.our_story[2]}
              </p>
            </SectionReveal>
          </motion.div>

          <motion.div
            className="col-lg-6 position-relative"
            variants={slideInRight}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            animate="visible"
          >
            <div className="ratio ratio-1x1 rounded overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-dark bg-opacity-50"></div>
            </div>

            <motion.div
              className="position-absolute translate-middle bg-white border rounded shadow p-4"
              style={{ bottom: "-2rem", right: "-2rem", maxWidth: "20rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="h5 fw-semibold mb-2">Our Mission</h3>
              <p className="text-muted">{HOMEPAGE.about_us.mission}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
