import React, { useState, useEffect } from "react";

function FuncMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log(`logMousePosition movement(FuncMouse.js)`);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    //Empty array as second parameter defines componentDidMount only

    console.log(`useEffect is activated only once`);
    window.addEventListener("mousemove", logMousePosition);

    //return statement with arrow function gives componentWillUnmount only (cleanup)
    return () => {
      console.log(`componentWillUnmount is activated (FuncMouse1.js)`);
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks x: {x} y:{y}
    </div>
  );
}

export default FuncMouse;
