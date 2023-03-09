import React from 'react'
import './Card.css'

function Card(props) {
    return(
        <div className='Card'>
            <div className='cardImgHolder'>
                <img className ="cardImg" src={props.img} alt=''/>
            </div>
            <div>{props.name}</div>
        </div>
    )
};

export default Card;