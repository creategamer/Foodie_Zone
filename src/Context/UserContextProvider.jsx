import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    const isLoggedIn = !!user;


    return(
        <>
            <UserContext.Provider value={{user,setUser, isLoggedIn}}>
            {children}
            </UserContext.Provider>
        </>
    )
}

export default  UserContextProvider