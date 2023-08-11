import Three from "./Three"
import { useStateContext } from "./context/StateContext"

const Two = () => {
  const {count} = useStateContext() 
  return (
    <div>
      <h1>Two - {count} from two</h1>
      <Three />
    </div>
  )
}

export default Two
