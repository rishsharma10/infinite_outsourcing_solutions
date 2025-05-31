import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/carousal.module.scss";
import accountfinance from "@/assets/accountfinance.jpg";
import Manufacturing from "@/assets/manufacturer.jpg";
import Pharmaceuticals from "@/assets/pharmacuticals.jpg";
import supplychain from "@/assets/supplychain.jpg";
import { fadeUp } from "@/lib/animation";

export default function OurIndustry() {
  const items = [
    {
      image: accountfinance,
      title: "Accounting & Finance",
    },
    {
      image: Manufacturing,
      title: "Manufacturing",
    },
    {
      image: Pharmaceuticals,
      title: "Pharmaceuticals",
    },
    {
      image: supplychain,
      title: "Supply Chain",
    },
  ];
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-0 mt-3">
      <div className="d-flex justify-content-center">
        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="row justify-content-between flex-column">
            <h2
              ref={titleRef}
              className="display-4 fw-bold mb-3 text-black text-shadow"
            >
              Industries We Serve
            </h2>
            <p ref={descRef} className="lead mb-4 text-black">
              We empower businesses across diverse sectors, including
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="d-flex align-items-center w-100">
          <div className={styles.navBtn} onClick={prev}>
            &larr;
          </div>

          {/* <motion.div
            key={current}
            // initial={{ scale: 1 }}
            // animate={{ scale: [0.2, 1, 0.2] }}
            // transition={{ duration: 6, ease: "easeInOut" }}
            initial={{ rotate:0 }}
            animate={{ rotate: [120, 0, 0], scale:[0.2,1 ,1] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={styles.circleContainer}
          >
            <motion.div
            key={current}
              className={styles.circleBorder}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            ></motion.div>
            <motion.div
              className={styles.circleBorder}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            ></motion.div>
            <motion.div
              className={styles.circleBorder}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            ></motion.div>

            <motion.div key={current} className={styles.carouselCircle} initial={{ rotate:0, scale:1 }}
            animate={{ rotate: [120, 0, 0], scale:[0.2,1 ,1] }}
            transition={{ duration: 2, ease: "easeInOut" }}>
              <img
                src={items[current].image.src}
                alt="carousel"
                className={styles.carouselImage}
              />
              <div className={styles.carouselOverlay}>
                <h5 className="mb-2 fs-1">{items[current].title}</h5>
                <a href="/" className="text-theme">
                  SABER MÁS
                </a>
              </div>
            </motion.div>
          </motion.div> */}

          <motion.div
            className={styles.circleContainer}
            key={current}
            animate={{
              scale: [1.1, 0.2, 1.1],
              // rotate: [0, 180, 0,],
              opacity: [1, 0.2, 1],
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <motion.div
              key={current}
              className={styles.circleBorder}
              animate={{ scale: [0.2, 1, 1], opacity: [0.2, 1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <motion.div
              key={current}
              className={styles.circleBorder}
              animate={{ scale: [0.2, 1, 1], opacity: [0.2, 1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <motion.div
              key={current}
              className={styles.circleBorder}
              animate={{ scale: [0.2, 1, 1], opacity: [0.2, 1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />

            <motion.div
              key={current}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [0.2, 1, 1], opacity: [0.2, 1, 1] }}
              transition={{ duration: 6, ease: "linear" }}
              className={styles.carouselCircle}
            >
              <img
                src={items[current].image.src}
                alt={items[current].title}
                className={styles.carouselImage}
              />
              <div className={styles.carouselOverlay}>
                <h5 className="mb-2 fs-1">{items[current].title}</h5>
                <a href="/" className="text-theme">
                  SABER MÁS
                </a>
              </div>
            </motion.div>
          </motion.div>

          <div className={styles.navBtn} onClick={next}>
            &rarr;
          </div>
        </div>
      </div>
    </section>
  );
}
