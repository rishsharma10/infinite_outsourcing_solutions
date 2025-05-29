import React from 'react'
// import "./Features.scss";
import featuresBg from "@/assets/environmental-pollution-factory-exterior-night.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const BannerDescriptionComponents = () => {
    const { contextSafe } = useGSAP(() => {
        gsap.set(".feature_right_card", {
            xPercent: 50,
        })
        gsap.set(".feature_right_card img", {
            xPercent: -50,
        })
        gsap.set([".features_txt_card_left", ".features_txt_card_right"], {
            width: "50%",
        })
        gsap.
            timeline({
                scrollTrigger: {
                    trigger: ".features_design",
                    scrub: true,
                    start: "top 00%",
                    markers: false,
                    pin: ".features_design",
                    end: "+=400%",
                    onUpdate: () => {

                    }
                }
            })
            .to(".features_design", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power1.inOut",
                duration: 1,
                overwrite: true,
            })
            .from(".features_txt_card h3", {
                y: 100,
                opacity: 0,
            }, "-=0.4")
            .addLabel("hiding")
            // .to(".feature_left_card", {
            //     xPercent: -100,
            //     duration: 0.5,
            // }, "hiding")
            // .to(".feature_left_card img ", {
            //     xPercent: 100,
            //     duration: 0.5,
            // }, "hiding")
            .to(".features_txt_card_left ", {
                x: -200,
                opacity: 0,
                duration: 0.1,
            }, "hiding")

            // .to(".feature_right_card", {
            //     xPercent: 100,
            //     duration: 0.5,
            // }, "hiding")
            // .to(".feature_right_card img ", {
            //     xPercent: -100,
            //     duration: 0.5,
            // }, "hiding")
            .to(".features_txt_card_right ", {
                x: 200,
                opacity: 0,
                duration: 0.1,
            }, "hiding")
    })

    const handleEnterRightCard = contextSafe(() => {
        gsap
            .timeline({
                defaults: {
                    ease: "expo.inOut",
                    duration: 1,
                }
            })
            .to(".feature_right_card", {
                xPercent: 40,
            }, "0")
            .to(".feature_right_card img", {
                xPercent: -40,
            }, "0")
            .to(".features_txt_card_right", {
                width: "60%",
            }, "0")
            .to(".features_txt_card_left", {
                width: "40%",
            }, "0")
    })
    const handleEnterLeftCard = contextSafe(() => {
        gsap
            .timeline({
                defaults: {
                    ease: "expo.inOut",
                    duration: 1,
                }
            })
            .to(".feature_right_card", {
                xPercent: 60,
            }, "0")
            .to(".feature_right_card img", {
                xPercent: -60,
            }, "0")
            .to(".features_txt_card_right", {
                width: "40%",
            }, "0")
            .to(".features_txt_card_left", {
                width: "60%",
            }, "0")
    })
    return (
        <div className="features_design">
            <div className="features_in">
                <img src={featuresBg.src} alt="" />
                <div className="features_cards">
                    <div
                        className="feature_card feature_left_card"
                        onMouseOver={handleEnterLeftCard}
                    >
                        <img src={featuresBg.src} alt="" />
                    </div>
                    <div
                        className="feature_card feature_right_card"
                        onMouseOver={handleEnterRightCard}
                    >
                        <img src={featuresBg.src} alt="" />
                    </div>
                </div>
                <div className="features_cards_text">
                    <div className="features_txt_card features_txt_card_left">
                        <h3>Industry Insights</h3>
                    </div>
                    <div className="features_txt_card features_txt_card_right">
                    <h6 className='text-white p-3 fs-4 fw-bolder'>The US outsourcing market is evolving rapidly. According to a Deloitte survey, cost reduction
remains a top driver, with 70% of businesses outsourcing to save money. Meanwhile,
technologies like AI are transforming the industry, enabling faster hiring and smarter operations.
At Infinite Outsourcing Solutions, we stay ahead of these trends, offering innovative solutions
that keep you competitive.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerDescriptionComponents
