import React, { useContext } from "react";
import {AppContext} from "../App";

function Home() {
  const { userName } =useContext(AppContext )
  return (
    <div>
      <h1> This is Home Page and user is {userName}</h1>
    </div>
  );
}

export default Home;
