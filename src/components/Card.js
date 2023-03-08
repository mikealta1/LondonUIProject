import React from 'react'
import './Card.css'

function Card(props) {
    return(
        <div className='Card'>
            <p>{props.name}</p>
            <div className='imgHolder'><img className ="cardImg" src={props.img}/></div>
        </div>
    )
};

export default Card;