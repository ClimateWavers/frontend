import React from "react";
import { motion } from "framer-motion";
const FeaturesSliceLg = ({ features = [], active }) => {
  return (
    <div className="max-md:hidden pl-[20px] lg:pl-[26px]">
      <ul className="mb-3 relative">
        <div className="absolute w-[6px] bg-[#EEEEEE] top-0 bottom-0" />
        {features.map((feature, id) => {
          const is_active = active === id + 1;
          return (
            <li
              key={id}
              className={`z-[1] relative mb-[40px] flex items-center text-gray transition last:mb-0 text-[20px] ${
                is_active && "!text-dark transition"
              }`}
            >
              {[1, 2, 3, 4].map((i) => {
                return (
                  is_active &&
                  i === active && (
                    <motion.div
                      key={i}
                      layoutId="border"
                      className="w-[6px] shrink-0 h-[90px] bg-secondary mr-[36px]"
                    ></motion.div>
                  )
                );
              })}
              {!is_active && (
                <div className="w-[6px] shrink-0 h-[90px] mr-[36px]"></div>
              )}

              <div>
                <h2 className="font-bold tracking-n-5">{feature.title}</h2>
                <p className="tracking-n-3 leading-[134%] text-[15px] max-w-[217px]">
                  {feature.content}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeaturesSliceLg;
