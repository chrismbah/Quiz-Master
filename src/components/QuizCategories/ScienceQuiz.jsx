import React, { useState } from "react";
import { Science } from "../../helpers/Science";

export default function ScienceQuiz() {
  const [curr, setCurr] = useState(1);
  return (
    <div className="science">
      <div className="box">
        <div className="question">
          <h3>{Science[curr].question}</h3>
        </div>
        <div className="options">
          <div className="option">
            <h3>A.</h3>
            <button>{Science[curr].A}</button>
          </div>
          <div className="option">
            <h3>B.</h3>
            <button>{Science[curr].B}</button>
          </div>{" "}
          <div className="option">
            <h3>C.</h3>

            <button>{Science[curr].C}</button>
          </div>{" "}
          <div className="option">
            <h3>D.</h3>

            <button>{Science[curr].D}</button>
          </div>{" "}
        </div>
        <div className="action-button">
        <button >
          Continue <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      </div>
    </div>
  );
}
