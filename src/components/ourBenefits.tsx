import { GroupIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PiggyBank, BrainCircuit, Expand, Target } from "lucide-react";


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

const benefits = [
  {
    key: "reduce_costs",
    title: "Reduce Costs",
    desc: "Save on hiring, training, and overhead expenses.",
    icon: <PiggyBank/>, // Lucide icon
  },
  {
    key: "access_expertise",
    title: "Access Expertise",
    desc: "Tap into specialized skills and advanced technologies.",
    icon: <BrainCircuit/>, // Lucide icon
  },
  {
    key: "enhance_flexibility",
    title: "Enhance Flexibility",
    desc: "Scale operations up or down based on demand.",
    icon: <Expand/>, // Lucide icon
  },
  {
    key: "focus_on_core_goals",
    title: "Focus on Core Goals",
    desc: "Free up resources for innovation and growth.",
    icon: <Target/>, // Lucide icon
  }
];

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
                  <h3>The Benefits of Outsourcing</h3>
                  <p className="my-4 pt-2 pb-3 fs-5">
                  Outsourcing is a strategic tool for US businesses. It allows you to
                  </p>
                  <p className="my-2 pt-0 pb-3 fs-5">
                  At Infinite Outsourcing Solutions, we amplify these benefits with AI-driven precision. Our
Vorkz.ai platform ensures you get the right talent or technology at the right time, every time.
                  </p>
                  {/* <button className="btn btn-primary px-4 py-2">
                    <span>Contact Partnership</span>
                  </button> */}
                </motion.div>
              </motion.div>

              <motion.div className="col-md-6" variants={staggerContainer}>
                {benefits.map((res, index) => (
                  <motion.div
                    key={index}
                    className="our-approach-container d-flex gap-3 mb-4"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span>
                      {res.icon}
                    </span>
                    <div>
                      <h4 className="fs-2 fw-medium">
                        {res.title}
                      </h4>
                      <p>
                        {res.desc}
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
