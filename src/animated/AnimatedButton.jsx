import React from "react";
import { motion } from "framer-motion";

export default function AnimatedButton({handleClick,action}) {
  const Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 200,
        damping: 15,
      },
    },
  };
  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: "0.9" }}
    >{action} <i class="fa-solid fa-arrow-right"></i></motion.button>
  );
}
