import React from 'react'

interface ArrayPropTypes{
    Array:string[]
}
function ArrayDetails(props:ArrayPropTypes) {
  return (
    <div>
{props.Array.map((item)=>(
    <li>{item}</li>
))}
    </div>
  )
}

export default ArrayDetails