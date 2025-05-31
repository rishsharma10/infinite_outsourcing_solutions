import React from 'react'
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import _SplitText from 'gsap/SplitText';
import { HOMEPAGE } from '@/utils/content';

const WhyChooseUsText = () => {
    useGSAP(() => {
        const paragraph = new _SplitText(".me_design p", {
            linesClass: "l",
            wordsClass: "w",
            charsClass: "c",
        } as any)
        const title = new _SplitText(".me_design h3", {
            linesClass: "l",
            wordsClass: "w",
            charsClass: "c",
        } as any)
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".me_design",
                    start: "top top",
                    scrub: 1,
                    pin: true,
                    end: "+=200%",
                }
            })
            .from(gsap.utils.shuffle([...paragraph.words, ...title.words]), {
                duration: 0.1,
                stagger: 0.05,
                // opacity: 0,
                color: "rgba(255, 255, 255, 0.2)",
            })
            .to(".about_slider_in", {
                duration: 5,
                clipPath: "circle(100% at 50% 50%)",
            }, "+=0.2")
           
    })

    return (
        <section className="me_design">
            <Container fluid>
                <div className="me_in">
                    {/* <h3>{HOMEPAGE.heading}</h3> */}
                    <p>{HOMEPAGE.sub_heading}</p>
                </div>
            </Container>
            <div className="about_slider_in">
                <video autoPlay loop muted>
                    <source src="/servicevehicle.mp4" />
                </video>
            </div>
        </section>
    )
}

export default WhyChooseUsText
