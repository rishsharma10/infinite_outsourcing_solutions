import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import overviewImage from "@/assets/overview.webp";
import overviewImage2 from "@/assets/overview-2.jpg";
import { HOMEPAGE } from "@/utils/content";
const cards = [
  {
    image: overviewImage,
    text: HOMEPAGE.company_overview.desc_1,
  },
  {
    image: overviewImage2,
    text: HOMEPAGE.company_overview.desc_2,
  },
  {
    image: overviewImage,
    text: HOMEPAGE.company_overview.desc_3,
  },
];

const Card = ({ image, text, source, delay = 0 }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 3, ease: "easeInOut", delay },
        },
      }}
      className="overview-card"
    >
      <div className="overview-image">
        <img src={image.src} alt="Card image" className="img-fluid" />
      </div>
      <div className="overview-content w-75">
        <p className="mt-4">{text}</p>
      </div>
    </motion.div>
  );
};

export default function CompanyOverview() {
  return (
    <section className="company-overview">
      <div className="container">
        <h2 className="text-dark text-center mb-5 display-4 fw-bold text-shadow">Company Overview</h2>
        <div className="row pt-5 gx-5">
          {cards.map((card, index) => (
            <div className="col-md-6 col-lg-4 overview-col">
              <Card key={index} {...card} delay={index * 0.3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
