import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  // State our component is currently in.
  // let count = 0;
  let [count, setCount] = useState(0);
  // [current value of state, function to update state]
  // const count = state[0];
  // const setCount = state[1];
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        The total is currently <span>{count}</span>
      </p>
      <div className="button_container">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add 1
        </button>
        <button
          onClick={() => {
            setCount(count * 5);
          }}
        >
          Multiply By 5
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
      <h1 id="big_total">{count}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
