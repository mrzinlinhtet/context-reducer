import One from "./One"
import Two from "./Two"
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)
  const increase = ()=> setCount(count+1)
  const decrease = ()=> setCount(count-1)

  return (
    <div>
      <One count={count} increase={increase} decrease={decrease}  />
      <Two count={count} increase={increase} decrease={decrease}  />
    </div>
  )
}

export default App
