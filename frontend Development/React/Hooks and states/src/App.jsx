import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(12)

  return (
    <>
      <div className='Main'>
        <div>The count is {count}</div>
        <button onClick={() => { setCount(count + 1) }}>Click me</button>
      </div>

    </>
  )
}

export default App
