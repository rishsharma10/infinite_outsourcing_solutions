import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import overviewImage from "@/assets/overview.webp";
import overviewImage2 from "@/assets/overview-2.jpg";
import { HOMEPAGE } from "@/utils/content";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import DrawSvg from "./DrawSvg";
import { Carousel } from "antd";
import carousalImage from "@/assets/bgcontactus.jpg";
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
gsap.registerPlugin(DrawSVGPlugin);
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
  useGSAP(() => {
    gsap.from(".draw-me", { duration: 1, drawSVG: true });
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100, x: 60, translateY: 100 },
        visible: {
          opacity: 1,
          translateY: 0,
          y: 0,
          x: 0,
          transition: { duration: 1, ease: "easeInOut", delay },
        },
      }}
      className="overview-card"
    >
      <div className="overview-image draw-me">
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
    // <section className="company-overview">
    //   <div className="container">
    //     <h2 className="text-dark text-center mb-5 display-4 fw-bold text-shadow">Company Overview</h2>
    //     <div className="row pt-5 gx-5">
    //       {cards.map((card, index) => (
    //         <div className="col-md-6 col-lg-4 overview-col">
    //           <Card key={index} {...card} delay={index * 0.4} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <>
      <section className="company-overview">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Total Control,
                <br />
                Total Confidence
              </h1>
            </div>

            <div className="col-12">
              <Carousel>
                <div>
                  <div className="row">
                    <div className="col-6">
                      <div className="our-service-card">
                        <h3>Invoice and Billing</h3>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="our-service-card">
                        <div className="image-part h-100">
                          <img
                            src={carousalImage.src}
                            alt="error"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
