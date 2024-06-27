import React, { useContext } from "react";
import {AppContext} from "../App";
import ChangeProfile from './ChangeProfile'

function Profile() {
  const { userName } =useContext(AppContext )

  return (
    <div>
      <h1>This is Profile page and user is {userName}</h1>
      <ChangeProfile/>
    </div>
  )
}

export default Profile
