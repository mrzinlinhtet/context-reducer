import { useStateContext } from "./context/StateContext"

const One = () => {
  const {count} = useStateContext()
  return (
    <div>
      One - {count} from one
    </div>
  )
}

export default One
