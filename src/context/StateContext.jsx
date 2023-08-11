import { createContext, useContext, useState } from "react";
export const StateContext = createContext();

const StateContextProvider = ({ children }) => {
    const [count, setCount]= useState(0)
    const inc = () => setCount(count + 1)
    const dec = () => setCount(count - 1)
    const data = {count, inc, dec}
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
export default StateContextProvider;
