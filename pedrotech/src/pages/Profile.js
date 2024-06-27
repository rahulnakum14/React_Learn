import React from 'react'
import ChangeProfile from './ChangeProfile'

function Profile(props) {
  return (
    <div>
      <h1>This is Profile page and user is {props.userName}</h1>
      <ChangeProfile setUsername={props.setUsername}/>
    </div>
  )
}

export default Profile
