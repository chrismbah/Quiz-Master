import React from "react";
import { useContext } from "react";
import { QuizApp } from "../../App";

export default function End() {
  const { score, setQuizState, setScore } = useContext(QuizApp);
  function restart() {
    setQuizState("category");
    setScore(0);
  }
  function exit() {
    setQuizState("menu")
  }
  return (
    <div className="end">
      <div className="box">
        <div className="end-text">
          <h2>Quiz Finished!</h2>
        </div>
        <div className="score">
          <h3>
            Score: {score}/{20}
          </h3>
        </div>
        <div className="restart">
          <button onClick={restart}>Restart Quiz</button>
          <button onClick={exit}>Exit</button>
        </div>
      </div>
    </div>
  );
}
