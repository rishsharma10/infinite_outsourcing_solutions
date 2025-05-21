import React, { useEffect, useState } from "react";
import logo from "@/assets/logo-white.png";
import logoblack from "@/assets/logoblack.png";
import { HOMEPAGE } from "@/utils/content";
import { motion } from "framer-motion";
import AnimText from "@/components/AnimText";
import overviewImage from "@/assets/overview.webp";
import overviewImage2 from "@/assets/overview-2.jpg";
import { SectionReveal } from "@/components/PageTransition";
import { fadeUp } from "@/lib/animation";
import ContactSection from "@/components/contactus/ContactSection";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/aboutus/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ClientSuccessStory from "@/components/ClientSuccessStory";
import OurServicesSection from "@/components/OurServicesections";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import AboutUsSection2 from "@/components/aboutus/AboutUsSection2";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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

  return (
    <>
      <section className="hero-section py-0 position-relative">
      <header className={`main-header position-fixed w-100 ${scrolled ? 'scrolled z-2' : 'z-2'}`}>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={!scrolled ? logo.src : logoblack.src} height={40} alt="Logo" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 mx-auto">
              <li className="nav-item"><a className="nav-link" href="#">Job Seekers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Outsourcing</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Industries we serve
                </a>
              </li>
              <li className="nav-item"><a className="nav-link" href="/">Jobs</a></li>
              <li className="nav-item"><a className="nav-link" href="/">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Contact Us</a></li>
            </ul>
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
          <div className="row align-items-center justify-content-center h-100">
            <div className="col-12 col-lg-11">
              <div className="position-relative z-2 text-center">
                <motion.div className="d-flex w-100 align-items-center justify-content-center">
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
                </motion.div>

                <p className="text-white w-75 mx-auto fs-4 mt-5">
                  {HOMEPAGE.sub_heading}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionReveal>
        <section className="company-overview">
          <div className="container">
            <div className="row gy-3">
              <motion.div variants={fadeUp}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}>
                <div className="col-12 mb-4">
                  <h2 className="fw-semibold text-primary">Company Overview</h2>
                  <hr />
                </div>
              </motion.div>
              <div className="col-md-4">
                <div className="overview-card">
                  <div className="overview-image mb-4">
                    <img src={overviewImage.src} alt="" className="img-fluid" />
                  </div>
                  <div className="overview-content">
                    <p>{HOMEPAGE.company_overview.desc_1}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{ marginTop: 80 }}>
                <div className="overview-card">
                  <div className="overview-image mb-4">
                    <img
                      src={overviewImage2.src}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="overview-content">
                    <p>{HOMEPAGE.company_overview.desc_2}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{ marginTop: 160 }}>
                <div className="overview-card">
                  <div className="overview-image mb-4">
                    <img src={overviewImage.src} alt="" className="img-fluid" />
                  </div>
                  <div className="overview-content">
                    <p>{HOMEPAGE.company_overview.desc_3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>
      <OurServicesSection/>
      <WhyChooseUsSection/>
      <IndustriesWeServe/>
      <AboutUsSection2/>
      {/* <AboutSection/> */}
      <ClientSuccessStory/>
      <ContactSection/>
      <Footer/>
    </>
  );
};

export default HomePage;
