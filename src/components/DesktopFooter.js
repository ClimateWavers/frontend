import React from "react";

const DesktopFooter = ({ footerItems = [] }) => {
  return (
    <ul className="hidden md:grid grid-cols-4 gap-4">
      {footerItems.map((footerItem, index) => {
        const is_last_element = footerItems.length - 1 === index;
        return (
          <li key={index}>
            <h4 className="font-bold text-[16px] lg:text-[18px] mb-[38px] lg:mb-[44px]">
              {footerItem.title}
            </h4>
            <ul>
              {footerItem.texts.map((item, id) => {
                return (
                  <li key={id} className="mb-[36px] last:mb-0 ">
                    <p className="text-[14px] lg:text-[16px] pr-4">
                      {item.label}
                    </p>
                  </li>
                );
              })}
            </ul>
            {is_last_element && (
              <p className="mt-[60px] font-bold text-[20px]">
                &copy; {new Date().getFullYear()}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopFooter;
