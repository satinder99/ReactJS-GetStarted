import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(3)

  const increment = ()=>{
    if(count<20)
      setCount(++count)
    else
      alert("value can not be more than 20")
  }
  const decrement = ()=>{
    if(count>0)
      setCount(--count)
    else
      alert("value can not be less than 0")
  }

  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={increment}>Increse Me</button>
      <br/>
      <br/>
      <button onClick={decrement}>Decrease Me</button>
    </>
  )
}

export default App
