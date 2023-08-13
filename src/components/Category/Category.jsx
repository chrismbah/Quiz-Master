import React from "react";
import "./Category.css";

export default function Category() {
  return (
    <div className="category">
      <div className="box">
        <div className="select-text">
          <h2>Select A Category of Your Choice </h2>
        </div>
        <div className="select-options">
          <button>
           <span>Science </span> <i class="fa-solid fa-flask fa-bounce"></i>{" "}
          </button>
          <button>
           <span> Mathematics</span><i class="fa-solid fa-calculator fa-bounce"></i>{" "}
          </button>
          <button>
          <span> History</span>{" "}
            <i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse"></i>{" "}
          </button>
          <button>
          <span> Comics</span><i class="fa-solid fa-mask fa-bounce"></i>
          </button>
        </div>
        <div className="action-button">
          <button>
            <span>Next</span> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
