"use client";
import React, { useState } from "react";
import { CloseCircle, HambergerMenu, More2, Notification } from "iconsax-react";
import Image from "next/image";
import Section from "./Section";

const DashboardHeader = ({menu, menuHandler}) => {


  return (
    <header className="sticky top-0 bg-white py-6 border-b-[1px] border-gray-main z-30 ">
      <Section className=" w-[100%] flex flex-row content-center items-center ">
        {/* Logo */}
        <div className="w-[30%] md:w-[70%]">
          <Image
            alt="logo"
            className=""
            src={"/Groupvaluebox.png"}
            priority
            quality={100}
            width={100}
            height={100}
          />
        </div>
        {/* Bell icon */}
        <div className="w-[70%] md:w-[30%] flex flex-row items-center justify-end ">
          {/* <div className="   "> */}
            
            {/* <span>red dot</span> */}
          {/* </div> */}
          <Notification
              size={30}
              color="#000"
              className="border-slate-300 border-b-[1px] border-r-[1px] border-l-[1px] p-2  "
            />
          {/* Name, profile and two dots */}
          <div className="flex flex-row items-center justify-end ">
            {/* Name from API */}
            <h3 className="px-2 md:px-8 ">Tolu Ayo</h3>
            {/* Profile pic */}
            <div className="bg-gray-main rounded-full mx-1 md:mx-auto ">
              <Image
                alt="profile picture"
                className="rounded-full w-[100%] "
                src={"/profilepic.png"}
                priority
                quality={100}
                width={100}
                height={100}
              />
            </div>
            {/* dots */}
            <More2 size={20} />
            <>
              {

                !menu ?
                  <HambergerMenu size={20} className={` sm:hidden`} onClick={menuHandler} />
                :
                  <CloseCircle size={20} className={` sm:hidden`} onClick={menuHandler} />
              }
            </>
          </div>
        </div>
      </Section>
    </header>
  );
};

export default DashboardHeader;
