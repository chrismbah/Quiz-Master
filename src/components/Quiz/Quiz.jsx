import React from "react";
import { QuizApp } from "../../App";
import { useContext } from "react";
import ComicsQuiz from "../QuizCategories/ComicsQuiz";
import HistoryQuiz from "../QuizCategories/HistoryQuiz";
import MathQuiz from "../QuizCategories/MathQuiz";
import ScienceQuiz from "../QuizCategories/ScienceQuiz";
import "./Quiz.css"

export default function Quiz() {
  const { quizCategory,dark } = useContext(QuizApp);
  return (
    <div className={`quiz ${dark?"quiz-dark":""}`}>
      {quizCategory === "comics" && <ComicsQuiz />}
      {quizCategory === "science" && <ScienceQuiz />}
      {quizCategory === "history" && <HistoryQuiz />}
      {quizCategory === "maths" && <MathQuiz />}
    </div>
  );
}
