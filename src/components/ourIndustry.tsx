import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/carousal.module.scss";
import overviewImage from "@/assets/overview.webp";
import overviewImage2 from "@/assets/overview-2.jpg";

const items = [
  {
    image: overviewImage,
    title: "Segmentación de clientes",
  },
  {
    image: overviewImage2,
    title: "Recomendación de productos",
  },
  {
    image: overviewImage,
    title: "Optimización de procesos",
  },
];

export default function OurIndustry() {
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
    <section className="">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="d-flex align-items-center w-100">
          <div className={styles.navBtn} onClick={prev}>
            &larr;
          </div>

          <motion.div
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
          </motion.div>

          {/* <motion.div className={styles.circleContainer}>
            <motion.div
              className={styles.circleBorder}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            />
            <motion.div
              className={styles.circleBorder}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            />
            <motion.div
              className={styles.circleBorder}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            />

            <motion.div
              key={current}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [0.2, 1,1], opacity: [0.2, 1,1]}}
              transition={{ duration: 2, ease: "easeOut" }}
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
          </motion.div> */}

          <div className={styles.navBtn} onClick={next}>
            &rarr;
          </div>
        </div>
      </div>
    </section>
  );
}
