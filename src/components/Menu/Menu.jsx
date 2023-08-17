import React, { useContext, useState } from "react";
import { QuizApp } from "../../App";
import { motion } from "framer-motion";
import AnimatedButton from "../../animated/AnimatedButton";
import "./Menu.css";


export default function Menu() {
  const { setQuizState } = useContext(QuizApp);
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

  const Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 200,
        damping: 15,
      },
    },
  };
  return (
    <div className="menu">
      <motion.div
        className="box"
        initial="hidden"
        animate="visible"
        // whileHover="hover"
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
            <AnimatedButton handleClick={handleClick} action="Continue"/>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
