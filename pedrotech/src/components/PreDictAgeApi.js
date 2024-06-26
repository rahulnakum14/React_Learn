import React, { useState, useEffect } from "react";
import axios from "axios";

function PreDictAgeApi() {
  const [name, setName] = useState("");

  const [age , setAge] = useState(null);

  const predictAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        setAge(res.data)
    });
  };

  const handleOnChange = (e) =>{
    setName(e.target.value)
  }

  useEffect(() => {
    predictAge();
  }, []);

  return (
    <div>
      <input type="text" placeholder="Enter name..." onChange={handleOnChange}></input>
      <button onClick={predictAge}>Predict Age</button>
      <h1>name is {age?.name}</h1>
      <h1>The age is {age?.age}</h1>
      <h1>count is {age?.count}</h1>
    </div>
  );
}

export default PreDictAgeApi;
