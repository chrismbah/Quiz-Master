import React, { useState } from "react";
import "./Category.css";
import { QuizApp } from "../../App";
import { useContext } from "react";

export default function Category() {
  const {quizState,setQuizState,quizCategory,setQuizCategory}=useContext(QuizApp)
  function handleClick(){
    if(quizCategory===""){
      alert("Please pick a category")
    }
    else{
      setQuizState("quiz")
    }
  }
  return (
    <div className="category">
      <div className="box">
        <div className="select-text">
          <h2>Select A Category of Your Choice </h2>
        </div>
        <div className="select-options">
          <button onClick={()=>setQuizCategory("science")}>
           <span>Science </span> <i class="fa-solid fa-flask fa-bounce"></i>{" "}
          </button>
          <button onClick={()=>setQuizCategory("maths")}>
           <span> Mathematics</span><i class="fa-solid fa-calculator fa-bounce"></i>{" "}
          </button>
          <button onClick={()=>setQuizCategory("history")}>
          <span> History</span>{" "}
            <i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse"></i>{" "}
          </button>
          <button onClick={()=>setQuizCategory("comics")}>
          <span> Comics</span><i class="fa-solid fa-mask fa-bounce"></i>
          </button>
        </div>
        <div className="action-button">
          <button onClick={handleClick}>
            <span>Next</span> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
