"use client";

import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import { faqData } from "@/utils/faqData";
import React from "react";

const Faq = () => {
  return (
    <div className="bg-primary py-8 ">
      <Section>
        <div className="text-white p-2 border-b border-white">
          <h2 className="text-[22px] md:text-[34px] ">
            We’ve asked this so you wont have to.
          </h2>
          <p className=" text-[14px] ">
            Check out some things we’ve answered for you
          </p>
        </div>
        <div className="text-white">
          {faqData.map((item) => {
            return (
              <Accordion
                key={item.title}
                title={item.title}
                content={item.content}
                className=" p-2 w-[100%] "
              />
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default Faq;
