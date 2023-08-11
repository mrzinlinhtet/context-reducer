import { useContext } from "react"
import { StateContext } from "./context/StateContext"

const One = () => {
  const {name} = useContext(StateContext)
  return (
    <div>
      One - {name}
    </div>
  )
}

export default One
