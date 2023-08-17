import React from "react";
import { useContext } from "react";
import { QuizApp } from "../../App";
import { motion } from "framer-motion";
import { Variants } from "../../animated/Variants";
import "./EndScreen.css";

export default function End() {
  const { score, setQuizState, setScore } = useContext(QuizApp);
  function restart() {
    setQuizState("category");
    setScore(0);
  }
  function exit() {
    setQuizState("menu");
  }
  return (
    <div className="end">
      <motion.div
        className="box"
        initial="hidden"
        animate="visible"
        variants={Variants}
      >
        <div className="end-text">
          <h2>Quiz Finished!</h2>
        </div>
        <div className="score">
          Score:
          <span>{score}</span>/{20}
        </div>
        <div className="restart">
          <button onClick={restart}>Restart Quiz</button>
          <button onClick={exit}>Exit</button>
        </div>
      </motion.div>
    </div>
  );
}
