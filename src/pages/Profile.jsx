// import React from 'react'
import { useContext } from "react"
import UserContext from "../Context/UserContext"


function Profile() {
    const {user} =useContext(UserContext)

    if(!user) return <div>Login</div>

    return <div>Welcome {user.Username}</div>

}

export default Profile
