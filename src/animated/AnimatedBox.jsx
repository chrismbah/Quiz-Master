import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBox() {
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
  
  };
  return (
    <motion.div
      className="box"
      initial="hidden"
      animate="visible"
      variants={Variants}
    >

    </motion.div>
  );
}
