import React, { useState } from 'react'

function UserHook() {

    interface userTypeHooks{
        name:string
        age:number
    }

const [user, setuser] = useState <userTypeHooks | null>(null)

const  HandleSignIn =()=>{
setuser({
    name:"farjana",
    age:80
})
}
 

const HandleSignOut = ()=>{
setuser(null)
}

  return (
    <div>
        <h1>user Type hooks</h1>
        <p>{user?.name}</p>
        <p>{user?.age}</p>
        <button onClick={HandleSignIn}>Sign In</button>
        <button onClick={HandleSignOut}>Sign out</button>
    </div>
  )
}

export default UserHook