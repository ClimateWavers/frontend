"use client";

import Section from "@/components/Section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useState } from "react";
import FeatureSliceMobile from "./FeatureSliceMobile";
import FeaturesSliceLg from "./FeaturesSliceLg";
import Image from "next/image";
import AnimationPanel from "./AnimationPanel";

const Features = () => {
  const showcase = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const [active, setActive] = useState(1);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .to(
          "#panel1",
          {
            opacity: 0,
            scale: 1.3,
            filter: "blur(20px)",

            onComplete: () => {
              setActive(2);
            },
            onReverseComplete: () => {
              console.log("Reversed 1");
              setActive(1);
            },
          },
          1
        )
        .to(
          "#panel2",
          {
            opacity: 0,
            scale: 1.3,
            filter: "blur(20px)",

            onComplete: () => {
              setActive(3);
            },
            onReverseComplete: () => {
              console.log("Reversed 2, setting active to next");
              setActive(2);
            },
          },
          2
        )
        .to(
          "#panel3",
          {
            opacity: 0,
            scale: 1.3,
            filter: "blur(20px)",

            onComplete: () => {
              setActive(4);
            },
            onReverseComplete: () => {
              console.log("Reversed 3, ");
              setActive(3);
            },
          },
          3
        )
        .to(
          "#panel4",
          {
            zIndex: 0,
            onStart: () => {
              setActive(4);
            },
            onReverseComplete: () => {
              console.log("Reversed 4");
              setActive(4);
            },
          },
          4
        );

      ScrollTrigger.create({
        animation: timeline,
        trigger: ".panel",
        start: "top top",
        endTrigger: "#end",
        end: "bottom",
        scrub: 1,
        pin: true,
        // markers: true,
      });
      //   gsap.to(".panel", {
      //     scrollTrigger: {
      //       scrub: true,
      //       trigger: ".panel",
      //       start: "top",
      //       end: "bottom",
      //       markers: true,
      //       pin: true,
      //     },
      //     zIndex: 40,
      //   });
    }, showcase);

    return () => ctx.revert();
  }, []);
  const features = [
    {
      title: "Airtime to cash",
      content: "Easily covert your airtime to cash on our platform, it’s fast.",
    },
    {
      title: "Bill Payment",
      content: "Pay for cable TV and discos (DSTV, GOTV, Ikeja Electric) etc.",
    },
    {
      title: "Top up",
      content:
        "Get amazing data plans and enjoy airtime topup all on our platform",
    },
    {
      title: "Send & Receive",
      content:
        "Send and receive money from your friends and family, anywhere, anytime.",
    },
  ];
  return (
    <div ref={showcase} className="bg-[#fcfcfc] relative z-[0]">
      <div className="min-h-[400px]  panel font-SF text-dark ">
        <Section
          className={
            "py-[45px] md:py-[unset] md:pt-[100px] lg:pt-[130px] 2xl:!px-[90px]"
          }
        >
          <div className="mb-[22px] md:hidden">
            <h2 className="text-[28px]  font-semibold mb-1 tracking-n-3">
              Features
            </h2>
            <p className="text-gray font-light text-[16px] tracking-n-3">
              Our platform offers some of the best services
            </p>
          </div>
          <div className="md:flex md:flex-row-reverse">
            <div className="md:basis-[58.67%]">
              <div className="bg-[#EBEDEE] max-md:h-[299px] md:h-full relative overflow-hidden max-md:mb-[40px] shrink-0">
                {/* Animation Panel */}
                <AnimationPanel key={active} active={active} id={active - 1} />
                {["convert.gif", "#b1b1b1", "#b2b2b2", "#b3b3b3"].map(
                  (l, id) => {
                    return (
                      active === id + 1 && (
                        <AnimationPanel active={active} id={id} key={id} />
                      )
                    );
                  }
                )}
              </div>
            </div>

            <div className="md:basis-[41.33%] shrink-0">
              <div className="mb-[22px] max-md:hidden pr-4">
                <h2 className="text-[24px] lg:text-[32px] lg:!tracking-[-0.04em] font-medium mb-1 tracking-n-3">
                  Features
                </h2>
                <p className="text-gray font-light text-[14px] lg:text-[16px] xl:text-[18px] tracking-n-3">
                  Our platform offers some of the best services
                </p>
              </div>
              <FeatureSliceMobile features={features} active={active} />
              <FeaturesSliceLg active={active} features={features} />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Features;
