import React from 'react'
import './Card.css'

function Card(props) {
    return(
        <div className='Card'>
            <div className='cardImgHolder'>
                <img className ="cardImg" src={props.img} alt=''/>
            </div>
            <div className='txtHolder'>
                <h1>{props.name}</h1>
                <a className = 'itemDetails' href = {props.link}>Find in Google Maps</a>
                <div className = 'itemDetails'>{props.desc}</div>
            </div>
        </div>
    )
};

export default Card;