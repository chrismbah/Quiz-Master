import React, { useState } from "react";
import "./Category.css";
import { QuizApp } from "../../App";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Category() {
  const { setQuizState, setQuizCategory, setScore,dark } = useContext(QuizApp);
  function changeCategory(category) {
    setQuizCategory(category);
    setQuizState("quiz");
  }
  const Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0
    },
  };
  return (
    <div className={`category ${dark?"category-dark":""}`}>
      <motion.div
        className="box"
        initial="hidden"
        animate="visible"
        variants={Variants}
      >
        <div className="select-text">
          <h2>Select A Category of Your Choice </h2>
        </div>
        <div className="select-options">
          <button onClick={() => changeCategory("science")}>
            <span>Science </span> <i class="fa-solid fa-flask fa-bounce"></i>{" "}
          </button>
          <button onClick={() => changeCategory("maths")}>
            <span> Mathematics</span>
            <i class="fa-solid fa-calculator fa-bounce"></i>{" "}
          </button>
          <button onClick={() => changeCategory("history")}>
            <span> History</span>{" "}
            <i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse"></i>{" "}
          </button>
          <button onClick={() => changeCategory("comics")}>
            <span> Comics</span>
            <i class="fa-solid fa-mask fa-bounce"></i>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
