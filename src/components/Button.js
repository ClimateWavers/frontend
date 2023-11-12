"use client";

import React from "react";
import { motion } from "framer-motion";

function Button({
  label,
  icon,
  variant = "contained",
  color = "primary",
  to_right,
  className,
  center,
  onClick,
  children,
  type
}) {
  let variants = {
    contained: {
      primary: "bg-primary border border-primary text-secondary",
      secondary: "bg-secondary border border-secondary text-primary",
    },
    outlined: {
      primary: "border border-primary text-primary",
      secondary:
        "border border-secondary text-secondary hover:bg-secondary/5 transition",
    },
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={`${variants[variant][color]} ${className} 
        ${center && "justify-center"}
       flex items-center gap-2 border  text-[14px] py-[12px] px-[30px]`}
      onClick={onClick}
      type={type}
    >
      <label className="pointer-events-none whitespace-nowrap">{label}</label>
      {icon && <span>{React.createElement(icon, { size: 18 })}</span>}
      {children}
    </motion.button>
  );
}

export default Button;
