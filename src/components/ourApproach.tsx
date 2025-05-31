import {
  SearchCheck,
  Settings2,
  BrainCircuit,
  Puzzle,
  LifeBuoy,
} from "lucide-react";
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


const steps = [
  {
    title: "Needs Assessment",
    desc: "We listen to understand your challenges and goals.",
    icon: <SearchCheck/>, // Represents assessing or reviewing needs
  },
  {
    title: "Customized Solutions",
    desc: "We design tailored strategies to meet your needs.",
    icon: <Settings2/>, // Represents configuration or customization
  },
  {
    title: "AI-Powered Execution",
    desc: "Vorkz.ai drives fast, accurate outcomes.",
    icon: <BrainCircuit/>, // Represents AI/machine execution
  },
  {
    title: "Seamless Integration",
    desc: "Our solutions blend with your existing processes.",
    icon: <Puzzle/>, // Represents fitting pieces/integration
  },
  {
    title: "Ongoing Support",
    desc: "We provide continuous guidance to ensure success.",
    icon: <LifeBuoy/>, // Represents help/support
  },
];


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
                <h3>Our Approach</h3>
                <p className="my-4 pt-2 pb-3 fs-5">
                We take a collaborative, transparent approach to deliver results
                </p>
                <p className="my-2 pt-0 pb-3 fs-5">
                This approach has helped US clients across industries overcome obstacles like talent shortages
and inefficient workflows.
                </p>
                {/* <button className="btn btn-primary px-4 py-2">
                  <span>Contact Partnership</span>
                </button> */}
              </div>
            </motion.div>

            {/* Right Column with 4 Unique Flip-ins */}
            <motion.div className="col-md-6" variants={staggerContainer}>
              {steps.map((res, index) => (
                <motion.div
                  key={index}
                  className="our-approach-container d-flex gap-3 mb-4"
                  variants={getScrollVariant(index, 4)}
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
        </div>
      </section>
    </>
  );
};
export default OurApproach;
