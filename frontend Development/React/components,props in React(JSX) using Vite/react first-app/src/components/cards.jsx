import React from 'react'
import "./cards.css"

const Cards = (props) => {
    return (
        <div className='cards'>
            {/* In the images we can use css by js using {}, we can directly use inline css by using {{}} in React. */}
            <img src="https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg" alt="techimages" style={{border: "2px solid red"}}/>
            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <button>View Profile</button>
        </div>
    )
}

export default Cards
