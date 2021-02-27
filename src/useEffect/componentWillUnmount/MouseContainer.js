import React, { useState } from "react";
import FuncMouse from "./FuncMouse1";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <FuncMouse />}
    </div>
  );
}

export default MouseContainer;
