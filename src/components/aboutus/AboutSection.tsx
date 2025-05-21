import { HOMEPAGE } from "@/utils/content";
import AboutBanner from "@/assets/overview-2.jpg";
import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import styles from "@/styles/AboutSection.module.css";
import { fadeUp } from "@/lib/animation";
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null as any);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("mission");
  const [activeTab2, setActiveTab2] = useState("global");
  return (
    <section className="aboutus">
      <section
        id="About"
        ref={sectionRef}
        className={`${isInView ? styles.inView : ""}`}
      >
        <div className="container">
          <div className="row gy-3">
            <motion.div variants={fadeUp}>
              <div className="col-12 mb-4">
                <h2 className="fw-semibold text-primary">About Us</h2>
                <hr />
              </div>
            </motion.div>
            <div className="container mt-5">
              <div className="row g-4 align-items-center mb-4">
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="px-5 text-center text-lg-start our-story-content">
                    <h3 className="fw-semibold">OUR STORY</h3>
                    <p>{HOMEPAGE.about_us.our_story[0]}</p>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="d-flex justify-content-center">
                    <div>
                      <img
                        src={AboutBanner.src}
                        alt="img"
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="mt-5">
                      <img
                        src={AboutBanner.src}
                        alt="img"
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section>
        <div className="container">
          <div className="text-center">
            <h2 className="mb-5 fw-semibold">Core Values</h2>
            <div className="row gy-4">
              {HOMEPAGE.about_us.core_values.map((res) => {
                return (
                  <>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="card core-value-card border-0 p-3 shadow">
                        <div className="core-value-img mb-2">
                          <img src={AboutBanner.src} alt="img" />
                        </div>
                        <h4 className="mb-0">{res.title}</h4>
                        <p className="mb-0">{res.description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="d-flex">
                <h4
                  className={`border-bottom text-center py-3 tab-heading w-100 ${
                    activeTab === "mission" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab("mission")}
                >
                  Our Mission
                </h4>
                <h4
                  className={` border-bottom text-center tab-heading py-3 w-100 ${
                    activeTab === "vision" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab("vision")}
                >
                  Our Vision
                </h4>
              </div>
              <p className="tab-content">
                {activeTab === "mission"
                  ? HOMEPAGE.about_us.mission
                  : HOMEPAGE.about_us.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="d-flex mb-3">
                <h4
                  className={`border-bottom text-center py-3 tab-heading w-100 ${
                    activeTab2 === "global" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab2("global")}
                >
                  Global Presense
                </h4>
                <h4
                  className={` border-bottom text-center tab-heading py-3 w-100 ${
                    activeTab2 === "community" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab2("community")}
                >
                  Community Involvement
                </h4>
              </div>
              <p className="tab-content">
                {activeTab2 === "global"
                  ? HOMEPAGE.about_us.global_presense
                  : HOMEPAGE.about_us.community_involvement}
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="text-center">
            <h2 className="mb-5 fw-semibold">Leadership</h2>
            <div className="row gy-4">
              {HOMEPAGE.about_us.leadership.map((res) => {
                return (
                  <div className="col-md-6 col-lg-4 col-xl-3" key={res.name}>
                    <div className="hover-card">
                      <div className="hover-card-image">
                        <img
                          src={AboutBanner.src}
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="hover-card-content">
                        <h4 className="text-white">{res.title}</h4>
                        <p className="text-bold">{res.name}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default AboutSection;
