import React, { useState,useContext } from "react";
import {AppContext} from "../App";

function ChangeProfile() {
    
  const [newUserName, setNewUserName] = useState("");
  const { setUsername } =useContext(AppContext )

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      ></input>
      <button onClick={() => {setUsername(newUserName)}}>Change Profile</button>
    </div>
  );
}

export default ChangeProfile;
