import React, { useEffect, useState } from "react";
import logo from "@/assets/logo-white.png";
import logoblack from "@/assets/logoblack.png";
import { HOMEPAGE } from "@/utils/content";
import { AnimatePresence, motion, useInView } from "framer-motion";
import AnimText from "@/components/AnimText";
import overviewImage from "@/assets/overview.webp";
import overviewImage2 from "@/assets/overview-2.jpg";
import { SectionReveal } from "@/components/PageTransition";
import { fadeUp } from "@/lib/animation";
import ContactSection from "@/components/contactus/ContactSection";
// import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/aboutus/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ClientSuccessStory from "@/components/ClientSuccessStory";
import OurServicesSection from "@/components/OurServicesections";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import AboutUsSection2 from "@/components/aboutus/AboutUsSection2";
import CompanyOverview from "@/components/companyOverview";
import OurIndustry from "@/components/ourIndustry";
import dynamic from "next/dynamic";
import { HomePageTitle } from "@/components/homePageTitle";
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false, // important to prevent server-side rendering
});
const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
const text =`lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.`;
  return (
    <>
      <section className="hero-section pt-0 pb-4 position-relative">
        <header
          className={`main-header position-fixed z-3 w-100 ${
            scrolled ? "d-none" : ""
          }`}
        >
          <nav className="navbar navbar-expand-lg bg-transparent py-3">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img
                  src={!scrolled ? logo.src : logo.src}
                  height={40}
                  alt="Logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mx-auto align-items-center">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Job Seekers
                    </a>
                  </li>
                  <li className="text-white fs-4 fw-lighter">|</li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Outsourcing
                    </a>
                  </li>
                  <li className="text-white fs-4 fw-lighter">|</li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Industries we serve
                    </a>
                  </li>
                  <li className="text-white fs-4 fw-lighter">|</li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Jobs
                    </a>
                  </li>
                  <li className="text-white fs-4 fw-lighter">|</li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      About Us
                    </a>
                  </li>
                  <li className="text-white fs-4 fw-lighter">|</li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div className="d-flex">
                  <button className="btn btn-primary rounded-pill px-4">
                    <span>Login</span>
                  </button>
                  {/* <button className="btn btn-primary rounded-pill px-4">Signup</button> */}
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* hero-video */}
        <video
          src="/servicevehicle.mp4"
          autoPlay={true}
          loop={true}
          className="position-absolute h-100 w-100 object-fit-cover"
        ></video>

        {/* hero-content */}
        <div className="container h-100">
          <div className="row align-items-end justify-content-center h-100">
            <div className="col-12">
              <div className="position-relative z-2">
                <div className="row pb-5 gx-5">
                  <div className="col-md-7">
                    <h1 className="text-white">
                      {/* {HOMEPAGE.heading} */}
                      <span className="ps-3 text-theme">
                       
                      </span>
                    </h1>
                    <HomePageTitle text={HOMEPAGE.heading} />
                    <button className="btn btn-primary px-4 py-2">
                      <span>Lorem, ipsum.</span>
                    </button>
                  </div>
                  <div className="col-md-5 border-start align-self-end py-3">
                    <p className="text-white fs-16">{HOMEPAGE.sub_heading}</p>
                    <div className="d-flex align-items-center gap-2 mt-4">
                      <button className="btn btn-primary px-4 py-2">
                        <span>Lorem, ipsum.</span>
                      </button>
                      <button className="btn btn-primary px-4 py-2">
                        <span>Lorem, ipsum.</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <motion.div className="d-flex w-100 align-items-center justify-content-center">
                  <motion.div
                    variants={containerVariants}
                    animate="visible"
                    initial="hidden"
                  >
                    <motion.span
                      variants={itemVariants}
                      className="d-inline h-100 w-100 p-4 fs-1 text-white"
                    >
                      <AnimText delay={1} />
                    </motion.span>
                  </motion.div>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CompanyOverview />
      <OurServicesSection />
      <OurIndustry />
      {/* <WhyChooseUsSection /> */}
      {/* <IndustriesWeServe /> */}
      {/* <AboutUsSection2/> */}
      {/* <AboutSection/> */}
      <ClientSuccessStory />
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
};

export default HomePage;
