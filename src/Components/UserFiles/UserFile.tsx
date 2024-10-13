import React from 'react'

interface propsTypes {
    name:string,
    age?: number,  //optional check if age is present then display otherwise its not display age and also did not show the error
    profession:string,
    isElgible:boolean

}
function UserFile(props:propsTypes) {

   let Elgible = props.isElgible

  return (
    <div>
         <h1>My name is {props.name}</h1>
         <p>age {props.age} </p>
       {Elgible ?  <>
        <p>You are elgible</p>
       </> : <>
       <p>not elgible</p>
       </>}
       
    </div>
  )
}

export default UserFile