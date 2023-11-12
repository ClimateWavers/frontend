import React from "react";

const Section = ({ children, className }) => {
  return (
    <section className={`px-[20px] sm:px-[40px] ${className}`}>
      {children}
    </section>
  );
};

export default Section;
