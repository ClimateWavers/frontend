import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Section from "./Section";
import Link from "next/link";
import links from "./links";

const Header = () => {
  const header_ref = useRef(null);

  useEffect(() => {
    const scrollFunction = (e) => {
      const header = header_ref.current;
      const body = e?.target?.body;
      const body_width = body?.clientWidth;
      const boxPosition = window.scrollY;
      console.log(window.scrollY);

      if (boxPosition > 180 && body_width >= 767) {
        if (!Array.from(header?.classList)?.includes("reshape")) {
          header?.classList?.add("reshape");
        }
      } else {
        header?.classList.remove("reshape");
      }
      if (boxPosition > 100 && body_width < 767) {
        if (!Array.from(header?.classList)?.includes("mobile-reshape")) {
          header?.classList?.add("mobile-reshape");
        }
      } else {
        header?.classList.remove("mobile-reshape");
      }
    };
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, [header_ref]);
  return (
    <header
      id="header"
      ref={header_ref}
      className="py-4 z-[3] sm:py-5  md:py-6 lg:py-7 "
    >
      <Section>
        <div className="flex justify-between items-center md:flex-col md:border-b md:border-b-secondary md:border-b-[2px] ">
          <div
            id="logo"
            className="relative h-[22.5px] w-[104.71px]
           md:h-[31.33px] md:w-[180.74px] md:mb-[30px] lg:h-[34.33px] lg:w-[190.74px]"
          >
            <Image
              alt="logo"
              className="object-contain"
              src={"/logo.png"}
              fill
              priority
              quality={100}
            />
          </div>

          <div className="cursor-pointer md:hidden">
            {[1, 2, 3].map((i) => {
              return (
                <div
                  key={i}
                  className="border border-secondary border-[1.5px] w-[22px] rounded-full mb-[4px] last:mb-0"
                />
              );
            })}
          </div>
        </div>
      </Section>
      <Section>
        <nav className="hidden md:flex justify-center mt-3">
          {links.map((link, id) => {
            return (
              <Link
                key={id}
                className="flex tracking-n-3 text-[14px] font-SF font-light header-link items-center mr-[70px] last:mr-0"
                href={link.path}
              >
                {link.label}
                {true && <div />}
              </Link>
            );
          })}
        </nav>
      </Section>
    </header>
  );
};

export default Header;
