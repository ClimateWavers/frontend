"use client"
import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardMenu from "./DashboardMenu";
import AddPin from "@/components/AddPin";


const DashboardLayout = () => {

  const [menu, setMenu] = useState(false)
  const [pin, setPin] = useState(false)

  setTimeout(() => {
    setPin(true)
  }, 5000)

  return (
    <div>
      <DashboardHeader menuHandler={() => setMenu(!menu)} menu={menu} />
      <div className="pt-0">
        <DashboardMenu isMobile={menu} />
        <div className=" ml-[230px]! " >
          {/* {children} */}
        </div>
      </div>
      {
        pin === true ?
          <AddPin pin={pin} setPin={setPin} />
        :
          null
      }
    </div>
  );
};

export default DashboardLayout;
