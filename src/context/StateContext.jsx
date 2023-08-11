import { createContext, useContext, useReducer, useState } from "react";
export const StateContext = createContext();

const StateContextProvider = ({ children }) => {

  const initialState = 0

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      case 'reset':
        return initialState
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

    // const [count, setCount]= useState(0)
    // const inc = () => setCount(count + 1)
    // const dec = () => setCount(count - 1)

    const data = {state, dispatch}
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
export default StateContextProvider;
