import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import overviewImage from "@/assets/overview.webp";
import overviewImage2 from "@/assets/overview-2.jpg";
import { HOMEPAGE } from "@/utils/content";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSvg from "./DrawSvg";
import { Carousel, Progress } from "antd";
import carousalImage from "@/assets/overview.webp";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
// const cards = [
//   {
//     image: overviewImage,
//     text: HOMEPAGE.company_overview.desc_1,
//   },
//   {
//     image: overviewImage2,
//     text: HOMEPAGE.company_overview.desc_2,
//   },
//   {
//     image: overviewImage,
//     text: HOMEPAGE.company_overview.desc_3,
//   },
// ];
// gsap.registerPlugin(DrawSVGPlugin);
// const Card = ({ image, text, source, delay = 0 }: any) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: false });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [inView]);
//   useGSAP(() => {
//     gsap.from(".draw-me", { duration: 1, drawSVG: true });
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 100, x: 60, translateY: 100 },
//         visible: {
//           opacity: 1,
//           translateY: 0,
//           y: 0,
//           x: 0,
//           transition: { duration: 1, ease: "easeInOut", delay },
//         },
//       }}
//       className="overview-card"
//     >
//       <div className="overview-image draw-me">
//         <img src={image.src} alt="Card image" className="img-fluid" />
//       </div>
//       <div className="overview-content w-75">
//         <p className="mt-4">{text}</p>
//       </div>
//     </motion.div>
//   );
// };

// gsap.registerPlugin(ScrollTrigger);

export default function CompanyOverview() {
  const progressRefs = useRef([]);
  const cardRefs = useRef([]);
  const headingRef = useRef(null);

  const settings = {
    slidesToShow: 1.3,
    dots: false,
    arrows: true,
    nextArrow: <ChevronRightCircle color="#000a33" />,
    prevArrow: <ChevronLeftCircle color="#000a33" />,
    beforeChange: (current: any, next: any) => {
      const target = progressRefs.current[next];
      if (target) {
        const targetPercent = 40; // Replace with dynamic if needed
        gsap.fromTo(
          target,
          { width: "0%" },
          {
            width: `${targetPercent}%`,
            duration: 1.5,
            ease: "power3.out",
          }
        );
      }
    },
  };

  // useEffect(() => {
  //   gsap.from(headingRef.current, {
  //     y: 50,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: headingRef.current,
  //       start: "top 90%",
  //     },
  //   });

  //   // Card animations
  //   cardRefs.current.forEach((el, index) => {
  //     gsap.from(el, {
  //       opacity: 0,
  //       y: 60,
  //       duration: 1,
  //       delay: index * 0.1,
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top 85%",
  //       },
  //     });
  //   });
  // }, []);

  return (
    <>
      <section className="company-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h1>
                Company <br /> Overview
              </h1>
            </div>

            <div className="col-12">
              <Carousel {...settings}>
                <div>
                  <div className="row mx-0 gx-2">
                    <div className="col-6 col-large">
                      <div className="company-overview-card p-0">
                        <div className="image-part h-100">
                          <img
                            src={carousalImage.src}
                            alt="error"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-small">
                      <div className="company-overview-card">
                        <h3 className="mb-3">1</h3>
                        <div className="overview-content mt-auto">
                          <p className="line-clamp-6">{HOMEPAGE.company_overview.desc_1}</p>
                          <Progress showInfo={false} percent={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mx-0 gx-2">
                    <div className="col-6 col-large">
                      <div className="company-overview-card p-0">
                        <div className="image-part h-100">
                          <img
                            src={carousalImage.src}
                            alt="error"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-small">
                      <div className="company-overview-card">
                        <h3 className="mb-3">2</h3>
                        <p className="line-clamp-6">{HOMEPAGE.company_overview.desc_2}</p>
                        <div className="overview-content mt-auto">
                          <Progress showInfo={false} percent={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                   <div>
                  <div className="row mx-0 gx-2">
                    <div className="col-6 col-large">
                      <div className="company-overview-card p-0">
                        <div className="image-part h-100">
                          <img
                            src={carousalImage.src}
                            alt="error"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-small">
                      <div className="company-overview-card">
                        <h3 className="mb-3">3</h3>
                        <p className="line-clamp-6">{HOMEPAGE.company_overview.desc_3}</p>
                        <div className="overview-content mt-auto">
                          <Progress showInfo={false} percent={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
