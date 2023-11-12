import React from 'react'
import dashboardMenuData from "@/utils/dashboardMenuData";
import Link from "next/link";
import Section from "./Section";
import { CloseCircle, MessageQuestion } from "iconsax-react";
import MenuReal from './MenuReal';
import {motion} from 'framer-motion'


const MobileMenu = ({menu, menuHandler}) => {
  return (
    <motion.div 
    className='bg-dark bg-opacity-50 backdrop-blur-sm w-[100%] h-[100vh] absolute top-0 left-0 z-50 '
    onClick={menuHandler}
    initial={{
        x: -100,
    }}
    whileInView={{
        x:0
    }}
    >
        <div className='w-[70%] h-[100%] bg-white '>
            {/* <div className=' p-5 ml-auto '><CloseCircle size={32} className={` sm:hidden`} onClick={menuHandler} /></div> */}
            {
                dashboardMenuData.map(({ label, icon, path, index }) => {
                    return(
                        <MenuReal path={path} icon={icon} key={index} label={label} />
                    )
                })
            }
            <div className="flex flex-row py-6 pl-[20px] sm:pl-[40px] text-slate-400 self-baseline ">
                <MessageQuestion /> Support
            </div>
        </div>
    </motion.div>
  )
}

export default MobileMenu