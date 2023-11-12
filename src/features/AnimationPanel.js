import React from "react";
import { motion } from "framer-motion";
const AnimationPanel = ({ l, id, active }) => {
  const position = {
    [1]: "translate-x-[20%] translate-y-[20%] transition",
    [2]: "translate-x-[5%] translate-y-[5%] transition",
    [3]: "translate-x-[0%] translate-y-[0%] transition",
    [4]: "translate-x-[30%] translate-y-[30%] transition",
  };
  let zindex = {
    1: "z-[4]",
    2: "z-[3]",
    3: "z-[2]",
    4: "z-[1]",
  };
  const SideBar = () => {
    return (
      <div className="border-r border-r-gray-main shrink-0 w-[18%] h-full"></div>
    );
  };
  let animate = {
    [1]: {
      x: "20%",
      y: "20%",
    },
    [2]: {
      x: "5%",
      y: "5%",
    },
    [3]: {
      x: "0%",
      y: "0%",
    },
    [4]: {
      x: "30%",
      y: "30%",
    },
  };
  return (
    <motion.div
      key={active}
      animate={animate[active]}
      transition={{
        layout: {
          duration: 0.3,
        },
      }}
      //   layoutId={active}
      //   id={`panel${id + 1}`}
      className={`h-[85%] w-[87%] flex rounded-[10px] overflow-hidden 
     
      absolute ${zindex[id + 1]}`}
      style={{ background: "#f9f9f9", ...animate[active] }}
    >
      <SideBar />
      <main className="flex-1">
        <header className="border-b border-b-gray-main max-md:h-[18%] md:h-[10%]"></header>
      </main>
      {/* <Image src={`/${l}`} fill className="object-cover" quality={100} /> */}
      {/* Animation {id + 1} */}
    </motion.div>
  );
};

export default AnimationPanel;
