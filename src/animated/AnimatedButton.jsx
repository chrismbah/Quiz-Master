import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { QuizApp } from "../App";

export default function AnimatedButton({ handleClick, action }) {
  const { dark } = useContext(QuizApp);
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
    <motion.button onClick={handleClick} whileTap={{ scale: "0.9" }}>
      <label className={`left ${dark?"dark-text":""}`}>{action}</label>
      <div className={`right ${dark?"dark-right":""}`}>
      <i class="fa-solid fa-arrow-right"></i>
      </div>
    </motion.button>
  );
}
