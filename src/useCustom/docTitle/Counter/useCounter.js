import { useState } from "react";

function useCounter(initialValue, value) {
  const [counter, setCounter] = useState(initialValue);
  const increament = () => {
    setCounter(counter + value);
  };

  const decreament = () => {
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return [counter, increament, decreament, reset];
}

export default useCounter;
