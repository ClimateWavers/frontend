"use client";

import React, { useState } from "react";
import dashboardMenuData from "@/utils/dashboardMenuData";
import Link from "next/link";
import Section from "./Section";
import { MessageQuestion } from "iconsax-react";
import MobileMenu from "./MobileMenu";
import MenuReal from "./MenuReal";

// Not to scatter code


const DashboardMenu = ({isMobile, menuHandler, menu}) => {
  return (
    <>
      { !menu ?


      <aside className="w-[230px] bg-white fixed top-[78px] bottom-0 left-0 border-r-[1px] border-gray-main h-[100vh] hidden sm:block ">
        <nav>
          {dashboardMenuData.map(({ label, icon, path, index }) => {
            return <MenuReal path={path} icon={icon} key={index} label={label} />;
          })}

          <div className="flex flex-row py-6 pl-[20px] sm:pl-[40px] text-slate-400 self-baseline ">
            <MessageQuestion /> Support
          </div>
        </nav>
      </aside>
      :
      <aside >
        <MobileMenu menuHandler={menuHandler} />
      </aside>
      }
    </>
  );
};

export default DashboardMenu;
