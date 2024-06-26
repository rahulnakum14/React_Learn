import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchApi() {
  const [data, setData] = useState([]);

  const fetchData = () =>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setData(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  useEffect(() => {
   fetchData();
  }, []);


  return (
    <div>
        <button onClick={fetchData}>Fetch Data</button>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchApi;
