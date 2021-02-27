import React, { useState, useEffect } from "react";

function FuncInterval() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default FuncInterval;
