import { GroupIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const OurBenefits = () => {
  return (
    <>
      <section className="our-approach our-benefits mb-0">
        <div className="container">
          <AnimatePresence>
            <motion.div
              className="row g-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div className="col-md-6" variants={fadeInUp}>
                <motion.div
                  className="our-approach-container"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3>We&apos;re invested in your success</h3>
                  <p className="my-4 pt-2 pb-3 fs-5">
                    From implementation support to comarketing, we&apos;re here
                    to help our global alliance partners grow their client
                    relationships — and their revenue
                  </p>
                  <button className="btn btn-primary px-4 py-2">
                    <span>Contact Partnership</span>
                  </button>
                </motion.div>
              </motion.div>

              <motion.div className="col-md-6" variants={staggerContainer}>
                {[...Array(4)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="our-approach-container d-flex gap-3 mb-4"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};
export default OurBenefits;
