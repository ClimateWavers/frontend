"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Section from "@/components/Section";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Hero = () => {

  const [login, setLogin] = useState(false)
  

  return (
    <div className="bg-primary overflow-hidden text-white relative pb-[155px] landscape:min-h-screen">
      <Header />
      <div className="fill" />
      <Section className="relative z-[2]">
        <div className="pt-[136px] md:pt-[89px] md:text-center mb-[73px] md:mb-[62px]">
          <h1
            className="font-medium text-[28px] mb-7 sm:text-[32px]
           md:text-[46px] lg:text-[62px] lg:leading-[140%] sm:max-w-[500px] lg:max-w-[680px] md:mx-auto"
          >
            <span>
              Unlimited Possibilities built by us for{" "}
              <span className="text-secondary">Everyone</span>{" "}
            </span>
          </h1>
          <p className="text-[18px] text-secondary2 sm:text-[22px] md:text-[22px] lg:text-[24px] md:mx-auto md:max-w-[840px]">
            Payments should be fun and seamless so we provide{" "}
            <br className="hidden md:block" /> fast, easy, secure and affordable
            transactions for <span className="text-secondary">businesses</span>
            &nbsp;and&nbsp;
            <span className="text-secondary">individuals</span>
          </p>
        </div>
        <div className="md:text-center">
          <p className="mb-4 text-[20px]">Get started</p>
          <div className="md:flex md:justify-center md:items-center">
            <Button
              icon={ArrowRight}
              className={"max-md:mb-[27px] md:mr-6"}
              // label={"Create account"}
              color="secondary"
            >
              <Link href='../signup' >Create account</Link>
            </Button>
            <Button
              className={"!px-[39px]"}
              label={"Login"}
              variant="outlined"
              color="secondary"
              onClick={() => setLogin(true)}
            />
          </div>
        </div>
      </Section>
      <div
        className="absolute  left-[-370px] top-[-337px] h-[600px] w-[558px] 
      lg:h-[700px] lg:w-[658px] lg:top-[-450px] lg:left-[-360px]
      "
      >
        <Image
          className="object-contain"
          priority
          fill
          quality={100}
          alt="map"
          src={"/map.png"}
        />
      </div>
      <div
        className="absolute right-[-264px] top-[337px] h-[712px] w-[662px]
      
      lg:h-[812px] lg:w-[762px] lg:right-[-200px]"
      >
        <Image
          className="object-contain"
          priority
          fill
          quality={100}
          alt="map"
          src={"/map.png"}
        />
      </div>
      {
        login === true ?
          <Login login={login} setLogin={setLogin} />
        :
          null
      }
    </div>
  );
};

export default Hero;
