import React, { useState } from "react";
import useDocTitle from "./useDocTitle";

function DocTitleThree() {
  const [count, setCount] = useState(0);

 useDocTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default DocTitleThree;
