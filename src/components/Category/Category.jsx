import React from "react";

export default function Category() {
  return (
    <div className="category">
      <div className="select-text">
        <h2>Select A Category </h2>
      </div>
      <div className="select-options">
        <button>
          Science <i class="fa-solid fa-flask fa-bounce"></i>{" "}
        </button>
        <button>
          Mathematics<i class="fa-solid fa-calculator fa-bounce"></i>{" "}
        </button>
        <button>
          History{" "}
          <i class="fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse"></i>{" "}
        </button>
        <button>
          Comics<i class="fa-solid fa-mask fa-bounce"></i>
        </button>
      </div>
    </div>
  );
}
