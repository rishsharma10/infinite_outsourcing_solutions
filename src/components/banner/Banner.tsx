
import React, { useEffect, useState } from 'react'
import car from "@/assets/ai-powered-device-concept.jpg";
import full from "@/assets/ai-powered-device-concept.jpg";
// import "./Banner.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
    const [done, setDone] = useState(false);
    useGSAP(() => {
        gsap
            .timeline({
                onComplete: () => {
                    setDone(true);
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: ".banner",
                            start: "top 0.1rem",
                            markers: false,
                            immediateRender: true,
                            scrub: 1,
                            end: "bottom 0.4",
                        }
                    })
                        .to(".banner", {
                            scale: 0.9,
                            clipPath: "inset(0 round 0px 0px 50px 50px)",
                        })
                        .to(".banner_in", {
                            scale: 1.2,
                            x: document.body.clientWidth > 575 ? -100 : 0,
                        }, "0")
                        .to(".banner_txt h1 span", {
                            xPercent: -50,
                            stagger: 0.05,
                            ease: "power1.inOut",
                        }, "0")
                }
            })
            .from(".banner_in", {
                scale: 1.2,
                filter: "blur(2rem)",
                duration: 1.5,
                ease: "power4.inOut",
            })
            .from(".banner_txt h1 span", {
                opacity: 0,
                // filter: "blur(2rem)",
                duration: 1,
                stagger: 0.2,
                ease: "power1.inOut",
                xPercent: -100,
            }, "0.5")
            .from(".banner_txt", { duration: 1, })

    })
    useEffect(() => {
        document.body.style.overflow = done ? "auto" : "hidden";
    }, [done])
    return (
        <>
            <div className="banner">
                <div className="banner_in">
                    <img src={full.src} alt="" className='full_img' />
                    <img src={car.src} alt="" className='car_img' />
                    <div className='banner_txt'>
                        <h1>
                            <span className='text-white'>Transform</span>
                            <span className='text-white'>Your</span>
                            <span className='text-white'>Business</span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
