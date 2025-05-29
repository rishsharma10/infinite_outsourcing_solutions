import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HOMEPAGE } from "@/utils/content";
import { motion } from "framer-motion";
import { url } from "inspector";
import banner from "@/assets/supplychain.jpg";
// gsap.registerPlugin(ScrollTrigger);
import clientImage from "@/assets/staffing.jpg";
const ClientSuccessStory = () => {
  const storyRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     storyRef.current,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: 'power2.out',
  //       scrollTrigger: {
  //         trigger: storyRef.current,
  //         start: 'top 80%',
  //       },
  //     }
  //   );
  // }, []);

useEffect(() => {
  const carousel = document.getElementById("clientCarousel");

  if (!carousel) return;

  const animateActiveSlide = () => {
    const activeSlide = carousel.querySelector(".carousel-item.active");
    if (!activeSlide) return;

    const images = activeSlide.querySelectorAll(".client-image img");
    const text = activeSlide.querySelectorAll("p");

    // Create a timeline for smoother sequencing
    const tl = gsap.timeline();

    tl.fromTo(
      images,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all", // clears inline styles after animation
      }
    ).fromTo(
      text,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all",
      },
      "-=0.8" // overlap the text animation starting 0.8 seconds before the previous ends
    );
  };

  // Animate first slide on load
  animateActiveSlide();

  // Animate on slide change
  carousel.addEventListener("slid.bs.carousel", animateActiveSlide);

  return () => {
    carousel.removeEventListener("slid.bs.carousel", animateActiveSlide);
  };
}, []);



  // Optional: If you have multiple stories
  const clientStories = [
    {
      quote: HOMEPAGE.client_success_stories,
      author: "Jane Doe, CTO at FastScale Inc.",
    },
    {
      quote: HOMEPAGE.client_success_stories,
      author: "John Smith, CEO at TechNova",
    },
  ];

  return (
    <section
      ref={storyRef}
      className="px-3 position-relative text-white client-success-story"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2 className="display-6 fw-bold text-center mb-5">
            Client Success Story
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div
                id="clientCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {clientStories.map((story, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="row gx-5 py-5">
                        <div className="col-md-6">
                          <div className="client-story-image">
                            <div className="row g-0">
                              <div className="col-md-6">
                                <div className="client-image">
                                  <img
                                    src={banner.src}
                                    alt="error"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mt-5">
                                <div className="client-image">
                                  <img
                                    src={clientImage.src}
                                    alt="error"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 align-self-end">
                          <p className="fs-16 lh-lg">"{story.quote}"</p>
                          <p className="fw-semibold fs-14 text-theme text-end">
                            — {story.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#clientCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#clientCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientSuccessStory;
