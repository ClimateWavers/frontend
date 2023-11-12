"use client";
import { ArrowDown2 } from "iconsax-react";

import Section from "./Section";
import Image from "next/image";
import { useState } from "react";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

const Footer = () => {
  const footerItems = [
    {
      title: "Company",
      texts: [
        { label: "About", path: "#" },
        { label: "Careers", path: "#" },
      ],
    },
    {
      title: "Support",
      texts: [
        { label: "0003331", path: "#" },
        ,
        { label: "help@valubox.com", path: "#" },
        { label: "support@valubox.com", path: "#" },
      ],
    },
    {
      title: "Legal",
      texts: [
        { label: "098993", path: "#" },
        { label: "Legal", path: "#" },
        { label: "Privacy Policy", path: "#" },
      ],
    },
    {
      title: "Follow",
      texts: [
        { label: "Twitter", path: "#" },
        { label: "Instagram", path: "#" },
        { label: "LinkedIn", path: "#" },
      ],
    },
  ];
  return (
    <footer className="py-[43px] font-SF md:pt-[70px] lg:pt-[80px] xl:pt-[90px]">
      <Section>
        <div>
          <div className="md:flex flex-row md:justify-between ">
            <div className="relative h-[41px] w-[212px] mb-[72px] md:h-[32px] md:w-[180px] lg:h-[37px] lg:w-[200px] ">
              <Image
                src={"/Groupvaluebox.png"}
                fill
                alt="logo"
                className="object-contain"
              />
            </div>
            <MobileFooter footerItems={footerItems} />
            <DesktopFooter footerItems={footerItems} />
          </div>
          <p className="text-center pt-[44px] font-bold text-[20px] md:text-right md:hidden md:pb-[70px]">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
