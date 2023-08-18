import React, { useContext, useState } from "react";
import { QuizApp } from "../../App";
import { motion } from "framer-motion";
import AnimatedButton from "../../animated/AnimatedButton";
import { Variants } from "../../animated/Variants";
import "./Menu.css";

export default function Menu() {
  const { setQuizState, dark } = useContext(QuizApp);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName !== "") {
      setQuizState("category");
    } else if (firstName == "") {
      alert("Please fill in First Name field");
    } else if (lastName == "") {
      alert("Please fill in Last Name field");
    } else {
      alert("Please Fill in all fields");
    }
  };
  function handleClick() {
    if (firstName && lastName !== "") {
      setQuizState("category");
    } else if (firstName == "") {
      alert("Please fill in First Name field");
    } else if (lastName == "") {
      alert("Please fill in Last Name field");
    } else {
      alert("Please Fill in all fields");
    }
  }

  return (
    <div className={`menu ${dark ? "dark-menu" : ""}`}>
      <motion.div
        className="box"
        initial="hidden"
        animate="visible"
        variants={Variants}
      >
        <div className="text">
          <h2>Welcome To Quiz Master Pro!</h2>
          <h3>
            Put your knowledge to the test and embark on a journey of curiosity
            and discovery!{" "}
          </h3>
        </div>
        <div className="name">
          <div className="first-name">
            <span>First Name: </span>{" "}
            <input
              type="text"
              placeholder="Enter first name..."
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="last-name">
            <form action="" onSubmit={handleSubmit}>
              <span>Last Name: </span>{" "}
              <input
                type="text"
                placeholder="Enter last name..."
                onChange={(e) => setLastName(e.target.value)}
              />
            </form>
          </div>
          <div className="action-button">
            <AnimatedButton handleClick={handleClick} action="Continue " />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
