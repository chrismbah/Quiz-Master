import React, { useState } from "react";
import { Math } from "../../helpers/Math";
import { useContext } from "react";
import { QuizApp } from "../../App";

export default function MathQuiz() {
  const { score, setScore, setQuizState } = useContext(QuizApp);
  const [curr, setCurr] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  function nextQuestion() {
    if (Math[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurr(curr + 1);
    setOptionChosen("")
    
  }
  function finishQuestion() {
    if (Math[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setQuizState("end");
    setOptionChosen("")
  }
  return (
    <div className="Math">
      <div className="box">
        <div className="question">
          <span>{Math[curr].no}</span>
          <h3>{Math[curr].question}</h3>
        </div>
        <div className="options">
          <div className="option">
            <h3>A.</h3>
            <button onClick={() => setOptionChosen("A")}>
              {Math[curr].A}
            </button>
          </div>
          <div className="option">
            <h3>B.</h3>
            <button onClick={() => setOptionChosen("B")}>
              {Math[curr].B}
            </button>
          </div>{" "}
          <div className="option">
            <h3>C.</h3>

            <button onClick={() => setOptionChosen("C")}>
              {Math[curr].C}
            </button>
          </div>{" "}
          <div className="option">
            <h3>D.</h3>

            <button onClick={() => setOptionChosen("D")}>
              {Math[curr].D}
            </button>
          </div>{" "}
        </div>
        <div className="action-button">
          {curr === Math.length - 1 ? (
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
