import React, { useState } from "react";

function Funcount() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count for function {count}
      </button>
    </div>
  );
}

export default Funcount;
