import React, { useEffect, useState } from "react";
import logo from "@/assets/logo-white.png";
import ClientSuccessStory from "@/components/ClientSuccessStory";
import OurServicesSection from "@/components/OurServicesections";
import CompanyOverview from "@/components/companyOverview";
import OurIndustry from "@/components/ourIndustry";
import dynamic from "next/dynamic";
import BannerComponent from "@/components/banner/Banner";
import BannerDescriptionComponents from "@/components/banner/BannerDescription";
import CtaSection from "@/components/ctaSection";
import NewWhyChooseUs from "@/components/newWhyChooseUs";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false, // important to prevent server-side rendering
});
const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* <MiotiIndustrySection/> */}
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
                {/* <button className="btn btn-primary rounded-pill px-4">
                    <span>Login</span>
                  </button> */}
                {/* <button className="btn btn-primary rounded-pill px-4">Signup</button> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <BannerComponent />
      <WhyChooseUsSection/>

      {/* <ElectricComponent/> */}
      <CompanyOverview />
      <OurServicesSection />
      <OurIndustry />
      {/* <NewIndustryComponent/> */}
      {/* <WhyChooseText/> */}
      {/* <div style={{ background: "#000" }}><WhyChooseUsSection/></div> */}
      <NewWhyChooseUs/>
      <ClientSuccessStory />
      <BannerDescriptionComponents />
      {/* <ContactSection /> */}
      <CtaSection/>
      <Footer />
    </>
  );
};

export default HomePage;
