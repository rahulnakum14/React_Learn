import React, { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);


  const incrementFive = () =>{
    setCount(prevCount => prevCount + 5)
  }


  return (
    <div>
      <button onClick={() => incrementFive()}>
        Click TO incrementCount 5
      </button>

      <button onClick={() => setCount(prevCount => prevCount + 1)}> Click TO incrementCount 1</button>
      {count}
    </div>
  );
}

export default UseStateCounter;
