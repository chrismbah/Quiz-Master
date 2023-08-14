import React from "react";
import { useContext } from "react";
import { QuizApp } from "../../App";

export default function End() {
  const { score,setQuizState } = useContext(QuizApp);
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
          <button onClick={()=>setQuizState("category")}>Restart Quiz</button>
          <button onClick={()=>setQuizState("menu")}>Exit</button>
        </div>
      </div>
    </div>
  );
}
