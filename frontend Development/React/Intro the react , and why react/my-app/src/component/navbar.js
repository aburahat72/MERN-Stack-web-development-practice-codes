import React from 'react'
import Footer from './footer'

// we can write directly as (props) or we can write ({logoText}) for passing in navbar
const Navbar = (props) => {  
  return (
    <div>
      <div className="logo">{props.logoText}</div>
        <ul>
            <li>Home</li>
            {/* Here we use the footer also as a components inside other components */}
            <Footer />
            <li>about</li>
            <li>contact us</li>
        </ul>
      
    </div>
  )
}

export default Navbar

