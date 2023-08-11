import {useReducer} from 'react'
import { useStateContext } from './context/StateContext'

const App = () => {
  // const initialState = {
  //   count1: 0,
  //   count2: 100
  // }

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'increment':
  //       return {...state, count1: state.count1 + action.payload}
  //     case 'decrement':
  //       return {...state, count1: state.count1 - action.payload}
  //     case 'reset':
  //       return initialState
  //     case 'increment2':
  //       return {...state, count2: state.count2 + action.payload}
  //     case 'decrement2':
  //       return {...state, count2: state.count2 - action.payload}
  //     default:
  //       return state
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, initialState)

  const {state, dispatch} = useStateContext()

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({type:"decrement"})}>-</button>
      <button onClick={() => dispatch({type:"increment"})}>+</button>
      <button onClick={() => dispatch({type:"reset"})}>Reset</button>
      {/* <h1>{state.count1}</h1>
      <button onClick={() => dispatch({type: 'decrement', payload: 1})}>-</button>
      <button onClick={() => dispatch({type: 'increment', payload: 1})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button> 
      <hr />
      <h1>{state.count2}</h1>
      <button onClick={() => dispatch({type: 'decrement2', payload: 10})}>-</button>
      <button onClick={() => dispatch({type: 'increment2', payload: 10})}>+</button> */}
      {/* <button onClick={() => dispatch({type: 'reset'})}>reset</button>  */}
    </div>
  )
}

export default App
