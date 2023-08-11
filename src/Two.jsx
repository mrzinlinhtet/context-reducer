import Three from "./Three"

const Two = ({count, increase, decrease}) => {

  return (
    <div>
      <h1>Two - {count}</h1>
      <button onClick={decrease}> - </button>
      <button onClick={increase}> + </button>
      <Three count={count} />
    </div>
  )
}

export default Two
