import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    // Here we can use the useEffect for alert when the color change
    useEffect(() => {
        alert("the color has changed")
    }, [color])
    
  return (
    
    <div>
      <p>Iam the navbar the color is {color}</p>
    </div>
  )
}

export default Navbar
