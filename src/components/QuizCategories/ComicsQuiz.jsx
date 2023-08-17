import React, { useState } from "react";
import { Comics } from "../../helpers/Comics";
import { useContext } from "react";
import { QuizApp } from "../../App";
import { motion } from "framer-motion";
import { Variants } from "../../animated/Variants";

export default function ComicsQuiz() {
  const { score, setScore, setQuizState } = useContext(QuizApp);
  const [curr, setCurr] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  function nextQuestion() {
    if (Comics[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurr(curr + 1);
    setOptionChosen("");
  }
  function finishQuestion() {
    if (Comics[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setQuizState("end");
    setOptionChosen("");
  }
  return (
    <div className="Comics">
      <motion.div className="box"
       initial="hidden"
       animate="visible"
       variants={Variants}
      >
        <div className="question">
          <h3>
            <span>{Comics[curr].no}.</span> {Comics[curr].question}
          </h3>
        </div>
        <div className="options">
          <div className="option">
            <button
              className={`option-button ${optionChosen==="A"?"selected":""}`}
              onClick={() => setOptionChosen("A")}
            >
              <span>A.</span> {Comics[curr].A}
            </button>
          </div>
          <div className="option">
            <button
              className={`option-button ${optionChosen==="B"?"selected":""}`}
              onClick={() => setOptionChosen("B")}
            >
              <span>B.</span> {Comics[curr].B}
            </button>
          </div>{" "}
          <div className="option">
            <button
             className={`option-button ${optionChosen==="C"?"selected":""}`}
              onClick={() => setOptionChosen("C")}
            >
              <span>C.</span> {Comics[curr].C}
            </button>
          </div>{" "}
          <div className="option">
            <button
              className={`option-button ${optionChosen==="D"?"selected":""}`}
              onClick={() => setOptionChosen("D")}
            >
              <span>D.</span> {Comics[curr].D}
            </button>
          </div>{" "}
        </div>
        <div className="action-button">
          {curr === Comics.length - 1 ? (
            <button onClick={finishQuestion}>
              Finish <i class="fa-solid fa-arrow-right"></i>
            </button>
          ) : (
            <button onClick={nextQuestion}>
              Next <i class="fa-solid fa-arrow-right"></i>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
