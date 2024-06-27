import React, { useState } from "react";

function ChangeProfile(props) {
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      ></input>
      <button onClick={() => {props.setUsername(newUserName)}}>Change Profile</button>
    </div>
  );
}

export default ChangeProfile;
