import React from "react";
import useCounter from "./useCounter";

function CounterOne() {
  const [counter, increament, decreament, reset] = useCounter(0, 1);

  return (
    <div>
      <h2>Count = {counter}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
