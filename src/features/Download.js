import Section from "@/components/Section";
import { Apple, GooglePlay } from "iconsax-react";
import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <Section className={"pt-[100px] max-w-[1230px] mx-auto"}>
      <div className=" flex flex-col-reverse md:flex-row   md:items-center ">
        <div className="md:basis-1/2">
          <div className="relative w-full h-[263px] md:h-[290px] lg:h-[330px] xl:h-[380px] max-md:mt-[56px] md:mr-5">
            <Image
              quality={100}
              fill
              src={"/iphone14.png"}
              className="object-contain object-left md:object-center"
              alt="An Iphone 14 pro max with our app"
            />
          </div>
        </div>
        <div className="flex flex-col  md:basis-1/2 md:ml-5">
          <h2 className="text-[22px] lg:max-w-[500px] mb-[54px] md:mb-[34px] lg:mb-[43px] max-md:max-w-[271px] md:text-[24px] md:font-medium lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-primary ">
            Coming soon on web and your favourite App stores
          </h2>
          <div className="flex flex-col ">
            <p className=" text-primary mb-4 text-[14px] font-SF md:text-[16px] lg:text-[18px] xl:text-[22px] ">
              Coming soon on
            </p>
            <div className="flex gap-4">
              <button className="p-4 border-2 border-primary flex items-center gap-2 text-primary font-semibold text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                <GooglePlay />
                <span>Google Playstore</span>
              </button>
              <button className="p-4 border-2 border-primary flex items-center gap-2 text-primary font-semibold text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] ">
                <Apple />
                <span>Apple Appstore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Download;
