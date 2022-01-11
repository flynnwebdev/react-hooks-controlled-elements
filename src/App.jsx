import { useState } from 'react'

function ShowCount(props) {
  return <p>You have clicked {props.count} times</p>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>State</h1>
      <ShowCount count={count} />
      <button onClick={() => setCount(curCount => curCount + 1)}>Click Me!</button>
    </>
  )
}

export default App
