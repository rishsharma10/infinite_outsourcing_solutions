import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HOMEPAGE } from "@/utils/content";
import { Flex } from "antd";
import { Button } from "@/antd/lib/AntRegistry";

export const GetText = ({ text }: any) => {
  return text.split(" ").map((word: any, index: number) => {
    return (
      <div key={word + index} className="word">
        {word.split("").map((letter: any, index: number) => {
          return (
            <span key={letter + index} className="letter">
              {letter}
            </span>
          );
        })}
        &nbsp;
      </div>
    );
  });
};

const ElectricComponent = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".electric_design",
          scrub: 1,
          start: "top 50%",
          end: "bottom 70%",
          markers: false,
        },
      })
      .from(".electric_txt_one > div:last-child span", {
        opacity: 0,
        stagger: 0.05,
        // duration: 2,
      })
      .to(".electric_txt_one > div span", {
        opacity: 0,
        stagger: 0.05,
        // duration: 2,
      })
      .to(
        ".electric_txt_two > div:last-child span",
        {
          opacity: 1,
          // duration: 2,
          stagger: 0.05,
        },
        "-=1.1"
      );
  });
  return (
    <>
      <section className="electric_design row">
        <div className="electric_design_in">
          <h3 className="electric_txt_one">
            <div>
              <GetText text={HOMEPAGE.sub_heading} />
            </div>
            <div>
              <GetText text={HOMEPAGE.sub_heading} />
            </div>
          </h3>
          <h3 className="electric_txt_two">
            <div>
              <GetText text={HOMEPAGE.sub_heading} />
            </div>
            <div>
              <GetText text={HOMEPAGE.sub_heading} />
            </div>
          </h3>
        </div>
        {/* <Flex gap={30} justify="center">
          <Button type="primary" size="large" >Book a Free Consultaion</Button>
          <Button type="primary" size="large">Explore Our Services</Button>
        </Flex> */}
        <div className="d-flex justify-content-center gap-5">
                  <button className="btn btn-primary rounded-pill px-4">
                    <span>Book a Free Consultaion</span>
                  </button>
                  <button className="btn btn-primary rounded-pill px-4">
                    <span>Explore Our Services</span>
                  </button>
                  {/* <button className="btn btn-primary rounded-pill px-4">Signup</button> */}
                </div>
      </section>
    </>
  );
};

export default ElectricComponent;
