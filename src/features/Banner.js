import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-secondary2 md:flex md:items-center">
      <div
        className="absolute h-[385px] w-[291.73px]  right-[2px] 
      md:h-[589px] md:w-[391px]   md:right-[unset] md:left-[40px]
        lg:h-[599px] lg:w-[401px] lg:left-[46px]  
        xl:h-[639px] xl:w-[441px] xl:left-[80px]
        2xl:left-[15%]"
      >
        <Image
          src={"/box.png"}
          className="object-contain inset-0"
          priority
          quality={100}
          fill
          alt=""
        />
      </div>
      <section
        className={
          "relative xl:max-w-[1230px] 2xl:max-w-[1360px] xl:mx-auto flex-1 z-[2] md:grid md:grid-cols-2 tracking-n-2 max-md:pt-[80px] md:pt-2"
        }
      >
        <div
          className="relative w-[414.12px] h-[242.66px] 
        md:w-[434px] md:h-[262px]
         lg:w-[454px] lg:h-[282px]
         xl:w-[494px] xl:h-[322px]"
        >
          <Image
            src={"/woman.png"}
            className="object-contain"
            fill
            quality={100}
            priority
            alt="woman"
          />
        </div>
        <div className="bg-mint-dark md:bg-transparent py-[24px] md:flex md:items-center px-[54px] md:pl-3  md:h-full">
          <p
            className="text-primary font-SF  text-center tracking-n-3 font-bold
            md:font-semibold md:text-left md:tracking-[-0.04em] md:max-w-[300px] md:leading-[140%]  md:text-[24px] 
           lg:text-[28px] lg:max-w-[350px] 
           xl:text-[32px] xl:max-w-[380px]
           2xl:text-[36px] 2xl:max-w-[410px]
           "
          >
            Pay or reward anyone anywhere with no barrier. It’s as easy as that.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
