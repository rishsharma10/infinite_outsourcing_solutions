import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap';
import bg1 from "@/assets/home1.png.webp"
import bg2 from "@/assets/home0.jpeg.webp"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const NewIndustryComponent = () => {
    const scope = useRef(null as any);
    useGSAP(() => {
        // gsap.set(".design_in", {
        //     clipPath: "inset(0% 35% 0% 35% round 3rem)",
        // })
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: scope.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: "+=500%",
                    markers: false,
                }
            })
            .fromTo(".design_in",
                {
                    left: "50%",
                    xPercent: -64,
                    yPercent: -50,
                },
                {
                    yPercent: -50,
                    xPercent: -50,
                    left: "50%",
                    duration: 0.1,
                })
            .fromTo(".design_in",
                {
                    clipPath: "inset(0% 35% 0% 35% round 3rem)",
                },
                {
                    height: "100dvh",
                    clipPath: "inset(0% 0% 0% 0% round 4rem)",
                })
            .to(".design_in", {
                "--opacity": 1,
            }, "<")

            .to(".circle_1", {
                opacity: 1,
            }, "<")
            .to(".circle_2", {
                opacity: 1,
            }, "<")

            .addLabel("circle_zooming")
            .to(".circle_1", {
                scale: 2,
            })
            .to(".circle_2", {
                scale: 1.8,
            }, "-=0.35")
            .to(".circle_3", {
                scale: 1.2,
            }, "-=0.35")
            .to(".circle_4", {
                scale: 0.8,
            }, "-=0.35")
            .to(".design_eye img", {
                opacity: 0,
                duration: 1,
            }, "circle_zooming")
            .to(".circles", {
                "--dot-o": 1,
            })

            .to(".eagle_eyed_dots", {
                "--dots-container-scale": 1,
                "--dots-container-opactiy": 1,
            })

            .from(".eagle_eyed_txt h2", {
                filter: "blur(2rem)",
                scale: 0,
                opacity: 0,
            }, "<")

            .to(".eagle_eyed_txt", { duration: 0.1 })

            .to(".eagle_eyed_txt", {
                scale: 2,
                filter: "blur(2rem)",
                opacity: 0,
            })

            .to(".eagle_eyed_dots", {
                "--dots-container-scale": 1.5,
                "--dots-container-opactiy": 0,
            }, "<")

            .to(".circles > div", {
                scale: 0.9,
                opacity: 0,
            }, "<")

            .to(".final_graphic", {
                clipPath: "circle(100% at 50% 50%)",
                duration: 1
            }, "-=0.3");


    } , {scope})
    const dotsCount = 30;
    const dots = Array.from({ length: dotsCount }).map(() => ({
        x: Math.random() * 100, // Random percentage for horizontal position
        y: Math.random() * 100, // Random percentage for vertical position
        size: Math.random() * 5 + 2, // Random size between 2px and 7px
    }));
















    const items = [
        {
          image: bg1.src,
          title: "Segmentación de clientes",
        },
        {
            image: bg1.src,
          title: "Recomendación de productos",
        },
        {
            image: bg1.src,
          title: "Optimización de procesos",
        },
      ];
      
        const [current, setCurrent] = useState(0);
      
        const next = () => setCurrent((prev:any) => (prev + 1) % items.length);
        const prev = () =>
          setCurrent((prev) => (prev - 1 + items.length) % items.length);
      
        useEffect(() => {
          const interval = setInterval(() => {
            next();
          }, 6000);
          return () => clearInterval(interval);
        }, []);
      







    return (
        <>
            <section ref={scope} className="cyber_convoy_design">
                <div className="design_out">
                    <div className="design_in">
                        <div className="design_eye">
                            <img className="design_eye_img" src={bg1.src} alt="" />
                        </div>
                        <div className="circles">
                            <div className="circle_1"></div>
                            <div className="circle_2"></div>
                            <div className="circle_3"></div>
                            <div className="circle_4"></div>
                        </div>
                        <div className="eagle_eyed">
                            <div className="eagle_eyed_txt">
                                <h2>Eagle-eyed cyber protection for a fearless future.</h2>
                            </div>
                            <div className="eagle_eyed_dots">
                                {dots.map((dot, index) => (
                                    <div
                                        key={index}
                                        className="dot"
                                        style={{
                                            left: `${dot.x}%`,
                                            top: `${dot.y}%`,
                                            width: `${dot.size}px`,
                                            height: `${dot.size}px`,
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div className="final_graphic">
                            <img src={bg2.src} alt="" />
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default NewIndustryComponent
