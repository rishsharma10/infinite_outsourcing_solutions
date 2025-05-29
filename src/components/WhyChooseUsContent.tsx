import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { Container } from 'react-bootstrap';
const benefits = [
    {
      title: "Reduce Costs",
      desc: "Save on hiring, training, and overhead expenses."
    },
    {
      title: "Access Expertise",
      desc: "Tap into specialized skills and advanced technologies."
    },
    {
      title: "Enhance Flexibility",
      desc: "Scale operations up or down based on demand."
    },
    {
      title: "Focus on Core Goals",
      desc: "Free up resources for innovation and growth."
    }
  ];
  

const WhyChooseUsContent = () => {
    useGSAP(() => {
        const panels = gsap.utils.toArray(".service_card:not(:first-child)");
        const tl = gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".services",
                    pin: true,
                    scrub: 1,
                    end: `+=${panels.length * 100}%`,
                }
            })

        panels.forEach((panel:any) => {
            tl.from(panel, {
                yPercent: 100,
            })
        })
    })
    return (
        <section className="services">
            <div className="services_sec">
                <Container>
                    <div className="services_in">
                        {Array.isArray(benefits) && benefits.map((res:any,index:number) => {
                            return <div className="service_card">
                            <div className="service_card_box" style={{backgroundColor:"ThreeDHighlight"}}>
                                <h2>{index+1}</h2>
                                <div>
                                    <h3 className='text-white'>{res.title}</h3>
                                    <p className='text-white'>{res.desc}</p>
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default WhyChooseUsContent
