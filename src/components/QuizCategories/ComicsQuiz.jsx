import React, { useState } from "react";
import { Comics } from "../../helpers/Comics";
import { useContext } from "react";
import { QuizApp } from "../../App";

export default function ComicsQuiz() {
  const { score, setScore, setQuizState } = useContext(QuizApp);
  const [curr, setCurr] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  function nextQuestion() {
    if (Comics[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurr(curr + 1);
    setOptionChosen("")
    
  }
  function finishQuestion() {
    if (Comics[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setQuizState("end");
  }
  return (
    <div className="Comics">
      <div className="box">
        <div className="question">
          <span>{Comics[curr].no}</span>
          <h3>{Comics[curr].question}</h3>
        </div>
        <div className="options">
          <div className="option">
            <h3>A.</h3>
            <button onClick={() => setOptionChosen("A")}>
              {Comics[curr].A}
            </button>
          </div>
          <div className="option">
            <h3>B.</h3>
            <button onClick={() => setOptionChosen("B")}>
              {Comics[curr].B}
            </button>
          </div>{" "}
          <div className="option">
            <h3>C.</h3>

            <button onClick={() => setOptionChosen("C")}>
              {Comics[curr].C}
            </button>
          </div>{" "}
          <div className="option">
            <h3>D.</h3>

            <button onClick={() => setOptionChosen("D")}>
              {Comics[curr].D}
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
      </div>
    </div>
  );
}
