import React from 'react'

interface DetailsUserProptypes{
   Details: {
    name:string,
    age:number
   }
}


export default function DetailsUserObject(props:DetailsUserProptypes) {
  return (
    <div>
      <h1>{props.Details.name}</h1>
      <h2>{props.Details.age}</h2>
      <div>
      <h1>{props.Details.name}</h1>
      <h2>{props.Details.age}</h2>
    </div>
    </div>
  )
}
