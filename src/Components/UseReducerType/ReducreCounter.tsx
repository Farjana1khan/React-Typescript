
import React, { useReducer } from 'react'



interface ActionTypes{
    type: "Increment" | "Decrement",
   
}

interface StateType{
    count:number
}
function ReducreCounter() {

   
    const initialState = {count: 0}

    const reducer = (state:StateType, action:ActionTypes)=>{

        switch(action.type){
            case "Increment":
                return {
                    count:state.count + 1

                }

                case "Decrement":
                    return{
                        count:state.count - 1
                    }

                     default:
                        return state

        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>  useReducer Counter {state.count}</h1>

      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    </div>
  )
}

export default ReducreCounter