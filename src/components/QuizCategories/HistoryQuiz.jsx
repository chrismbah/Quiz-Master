import React, { useState } from "react";
import { History } from "../../helpers/History";
import { useContext } from "react";
import { QuizApp } from "../../App";

export default function HistoryQuiz() {
  const { score, setScore, setQuizState } = useContext(QuizApp);
  const [curr, setCurr] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  function nextQuestion() {
    if (History[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurr(curr + 1);
    setOptionChosen("")
    
  }
  function finishQuestion() {
    if (History[curr].answer === optionChosen) {
      setScore(score + 1);
    }
    setQuizState("end");
    setOptionChosen("")
  }
  return (
    <div className="History">
      <div className="box">
        <div className="question">
          <span>{History[curr].no}</span>
          <h3>{History[curr].question}</h3>
        </div>
        <div className="options">
          <div className="option">
            <h3>A.</h3>
            <button onClick={() => setOptionChosen("A")}>
              {History[curr].A}
            </button>
          </div>
          <div className="option">
            <h3>B.</h3>
            <button onClick={() => setOptionChosen("B")}>
              {History[curr].B}
            </button>
          </div>{" "}
          <div className="option">
            <h3>C.</h3>

            <button onClick={() => setOptionChosen("C")}>
              {History[curr].C}
            </button>
          </div>{" "}
          <div className="option">
            <h3>D.</h3>

            <button onClick={() => setOptionChosen("D")}>
              {History[curr].D}
            </button>
          </div>{" "}
        </div>
        <div className="action-button">
          {curr === History.length - 1 ? (
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
