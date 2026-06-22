import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import Navbar2 from './components/Navbar2'

function App() {
  const [count, setCount] = useState(0)
  // const [first, setFirst] = useState(5)
  const [color, setclr] = useState(1)
  
  // This useEffect is used for wellcoming the user
  // Run only on first render
  useEffect(() => {
    alert("wellcome to my web page and i will only in first render")
  
  }, [])

  // This useEffect is used for alert when count is changed 
  // In this Effect during the count update the color also update logic is implemented here
   useEffect(() => {
    alert("The count has changed")
    // Here the color is increamenting
    setclr(color + 1)
  }, [count])
  
  // I will run on every render
  useEffect(() => {
    alert("The is the universal States every referesh i will works because it does not have [] brackets")
  })

  // useEffect(() => {
  //   alert("This is for the first the state option")
  

  // }, [first])
  

  return (
    <>
    
     <Navbar color={"Navy " + "blue " + color}  />
     {/* <Navbar2 color={"Navy " + "blue " + color}  /> */}

      <div>
        This is my count {count}
      </div>
      <button onClick={()=>{setCount(count + 1)}}>click me</button>
    </>
  )
}

export default App
