import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MobileFooter = ({ footerItems }) => {
  const [activeDropdown, setActiveDropdown] = useState([]);
  return (
    <div className="md:hidden">
      {footerItems.map((footerItem, index) => {
        const is_active = activeDropdown.includes(footerItem.title);
        return (
          <div key={index} className="mb-[44px]  ">
            <div className="flex justify-between  ">
              <h4 className="text-[20px] tracking-n-3 font-bold ">
                {footerItem.title}
              </h4>

              <motion.div
                className="cursor-pointer"
                onClick={() => {
                  if (is_active) {
                    setActiveDropdown(
                      activeDropdown.filter(
                        (title) => title !== footerItem.title
                      )
                    );
                  } else {
                    setActiveDropdown([...activeDropdown, footerItem.title]);
                  }
                }}
                animate={{ rotate: is_active ? 180 : 0 }}
              >
                <ArrowDown2 className="md:hidden" />
              </motion.div>
            </div>

            {activeDropdown &&
              activeDropdown.filter((d) => d === footerItem.title).length >
                0 && (
                <ul>
                  {footerItem.texts.map((text, textIndex) => (
                    <li
                      key={textIndex}
                      className="font-SF tracking-n-3 text-[16px]"
                    >
                      <p className="mr-[42px]">{text.label}</p>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        );
      })}
    </div>
  );
};

export default MobileFooter;
