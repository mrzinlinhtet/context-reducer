import { useStateContext } from "./context/StateContext"

const Three = () => {
  const {inc, dec} = useStateContext()
  return (
    <div>
      <h1>Three</h1>
      <button onClick={dec}>Dec</button>
      <button onClick={inc}>Inc</button>
    </div>
  )
}

export default Three
