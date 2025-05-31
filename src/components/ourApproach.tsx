import { GroupIcon } from "lucide-react";
import { motion } from "framer-motion";

const getScrollVariant = (rotateX = 12, skewY = 5) => ({
  hidden: {
    opacity: 0,
    y: 60,
    rotateX,
    skewY,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
});

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const OurApproach = () => {
  return (
    <>
      <section className="our-approach mb-0">
        <div className="container">
          <motion.div
            className="row g-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Animates every time in view
          >
            {/* Left Column */}
            <motion.div className="col-md-6" variants={getScrollVariant(10, 3)}>
              <div className="our-approach-container">
                <h3>We&apos;re invested in your success</h3>
                <p className="my-4 pt-2 pb-3 fs-5">
                  From implementation support to comarketing, we&apos;re here to
                  help our global alliance partners grow their client
                  relationships — and their revenue
                </p>
                <button className="btn btn-primary px-4 py-2">
                  <span>Contact Partnership</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column with 4 Unique Flip-ins */}
            <motion.div className="col-md-6" variants={staggerContainer}>
              {[12, -10, 8, -7].map((angle, idx) => (
                <motion.div
                  key={idx}
                  className="our-approach-container d-flex gap-3 mb-4"
                  variants={getScrollVariant(angle, 4)}
                >
                  <span>
                    <GroupIcon />
                  </span>
                  <div>
                    <h4 className="fs-2 fw-medium">
                      We&apos;re invested in your success
                    </h4>
                    <p>
                      From implementation support to comarketing, we&apos;re
                      here to help our global alliance partners grow their
                      client relationships — and their revenue
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default OurApproach;
