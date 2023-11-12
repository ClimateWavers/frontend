"use client";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";

const GetStarted = () => {
  return (
    <Section className="text-primary overflow-hidden pt-[51px] pb-[71px] relative bg-[#F5FAFD] md:pt-[90px] md:pb-[79px]">
      <div className="relative z-[1] md:text-center">
        <h3 className="text-[20px] mb-[10px] md:font-medium sm:text-[22px] md:text-[24px] lg:text-[26px]">
          Get Started for free in seconds
        </h3>
        <p className="text-[14px] font-SF items-center mb-[58px] max-md:max-w-[450px] tracking-n-3 sm:text-[16px] md:text-[14px] ">
          Get all the best financial service for your growth for free.
          <br className="max-md:hidden" /> Open the last account you will ever
          need for your daily transactions
        </p>

        <div className="md:flex md:justify-center md:items-center ">
          <Button
            icon={ArrowRight}
            className={"py-[11px]  px-[50px] text-[20px]"}
            label={"Get Started"}
            color="primary"
          />
        </div>
      </div>
      <div className="absolute h-[587px] lg:h-[600px] w-[483px] top-[-89px] right-[-209px] w-[463px] md:right-[-55px] lg:right-[-51px]">
        <Image
          className="object-contain"
          priority
          fill
          quality={100}
          alt="background"
          src={"/bg.png"}
        />
      </div>
    </Section>
  );
};

export default GetStarted;
