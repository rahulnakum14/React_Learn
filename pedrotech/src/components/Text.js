import React, { useState, useEffect } from "react";

const Text = () => {
  const [text, setText] = useState("");

  /**Initially Mounting */
  //   useEffect(() =>{
  //     console.log('Component Mounted');
  //   })

  /** Mounting Updating */
  useEffect(() => {
    console.log("Component Mounted");
  }, [text]); // Updating if its empty [] then it execurtes once else executes certain action executed.

  /** Mounting End */
  useEffect(() => {
    console.log("Component Mounted");
    //Executed at lasr
    return () => {
      console.log("Component UnMounted");
    };
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
