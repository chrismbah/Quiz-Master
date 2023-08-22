import React, { createContext, useState } from "react";
import Category from "./components/Category/Category";
import End from "./components/EndScreen/End";
import Menu from "./components/Menu/Menu";
import Quiz from "./components/Quiz/Quiz";
import "./App.css";
export const QuizApp = createContext();

export default function App() {
  const [quizCategory, setQuizCategory] = useState("science");
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0);
  const [dark, setDark] = useState(false);

  function toggleBtn() {
    setDark(!dark);
  }

  return (
    <QuizApp.Provider
      value={{
        quizState,
        setQuizState,
        quizCategory,
        setQuizCategory,
        score,
        setScore,
        dark,
      }}
    >
      <div className={`App ${dark ? "App-dark" : ""}`}>
        <div className={`header ${dark ? "header-dark" : ""}`}>
          <h2>
            Quiz Master Pro <i class="fa-solid fa-lightbulb fa-beat"></i>
          </h2>
          <div className="logos">
            <div className={`github ${dark ? "logo-dark" : ""}`}>
              <a href="https://github.com/chrismbah/Quiz-Master-Pro">
              <i class='bx bxl-github' ></i>
              </a>
            </div>
            <div className={`mode ${dark ? "logo-dark" : ""}`}>
            <i class={`bx ${dark?"bx-sun":"bxs-moon"}`} onClick={toggleBtn} ></i>
            </div>
          </div>
        </div>
        {quizState === "menu" && <Menu />}
        {quizState === "category" && <Category />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "end" && <End />}
      </div>
    </QuizApp.Provider>
  );
}
