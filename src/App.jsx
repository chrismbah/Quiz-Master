import React, { createContext, useState } from "react";
import Category from "./components/Category/Category";
import End from "./components/EndScreen/End";
import Menu from "./components/Menu/Menu";
import Quiz from "./components/Quiz/Quiz";
import "./App.css";
export const QuizApp = createContext();

export default function App() {
  const [quizCategory,setQuizCategory]=useState("")
  const [quizState, setQuizState] = useState("category");
  return (
    <QuizApp.Provider value={{ quizState, setQuizState,quizCategory,setQuizCategory }}>
      <div className="App">
        <div className="header">
          <h2>
            Quiz Master Pro <i class="fa-solid fa-lightbulb fa-beat"></i>
          </h2>
          <div className="logos">
            <i class="fa-brands fa-github"></i>
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
