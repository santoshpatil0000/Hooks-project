import React, { useState } from "react";

function FuncCount2() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const increamentFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count by function : {count}
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Inctreament
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decreament
      </button>
      <button onClick={increamentFive}>Increment by 5</button>
    </div>
  );
}

export default FuncCount2;
