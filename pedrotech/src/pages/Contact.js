import React, { useContext } from "react";
import {AppContext} from "../App";

function Contact() {
  const { userName } =useContext(AppContext )

  return (
    <div>
      <h1> This is contact page  and user is {userName}</h1>
    </div>
  )
}

export default Contact
