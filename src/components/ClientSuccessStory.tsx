import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HOMEPAGE } from '@/utils/content';
import { motion } from 'framer-motion';

const ClientSuccessStory = () => {
    const storyRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
        if (storyRef.current) {
          gsap.fromTo(
            storyRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: storyRef.current,
                start: 'top 80%',
              },
            }
          );
        }
      }, []);

  return (  
    <section
    ref={storyRef}
    className="py-5 px-3 position-relative text-white"
    style={{
    //   background: 'linear-gradient(to right,rgba(248, 64, 7, 0.89),rgb(226, 99, 40),rgba(248, 120, 69, 0.69))',
    }}
  >
    <motion.div initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            >

    <div className="container">
      <h2 className="display-6 fw-bold text-center mb-5">Client Success Story</h2>
      <div className="row justify-content-center">
        <div className="col-md-10 bg-white bg-opacity-10 p-4 rounded-4 shadow-lg">
          <p className="fs-5">"{HOMEPAGE.client_success_stories}"</p>
          {/* <p className="fw-semibold text-end">— Jane Doe, CTO at FastScale Inc.</p> */}
        </div>
      </div>
    </div>
    </motion.div>

  </section>
  )
}

export default ClientSuccessStory