import React, { useState } from "react";
import { Science } from "../../helpers/Science";
import { useContext } from "react";
import { QuizApp } from "../../App";

export default function ScienceQuiz() {
  const { score, setScore, setQuizState } = useContext(QuizApp);
  const [curr, setCurr] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  function nextQuestion() {
    if (Science[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurr(curr + 1);
  }
  function finishQuestion() {
    if (Science[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setQuizState("end");
  }
  return (
    <div className="science">
      <div className="box">
        <div className="question">
          <span>{Science[curr].no}</span>
          <h3>{Science[curr].question}</h3>
        </div>
        <div className="options">
          <div className="option">
            <h3>A.</h3>
            <button onClick={() => setOptionChosen("A")}>
              {Science[curr].A}
            </button>
          </div>
          <div className="option">
            <h3>B.</h3>
            <button onClick={() => setOptionChosen("B")}>
              {Science[curr].B}
            </button>
          </div>{" "}
          <div className="option">
            <h3>C.</h3>

            <button onClick={() => setOptionChosen("C")}>
              {Science[curr].C}
            </button>
          </div>{" "}
          <div className="option">
            <h3>D.</h3>

            <button onClick={() => setOptionChosen("D")}>
              {Science[curr].D}
            </button>
          </div>{" "}
        </div>
        <div className="action-button">
          {curr === Science.length - 1 ? (
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
