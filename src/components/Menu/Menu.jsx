import React, { useContext, useState } from "react";
import { QuizApp } from "../../App";
import "./Menu.css";
import { motion } from "framer-motion";

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
            <motion.button
              onClick={handleClick}
              // whileHover={{scale:'1.1'}}
              whileTap={{ scale: "0.9" }}
            >
              Continue <i class="fa-solid fa-arrow-right"></i>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
