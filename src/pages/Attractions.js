import React from 'react';
import Card from '../components/Card';
import LondonEye from "./images/londoneye.jpg"

const text = "London Eye"

const Attractions = () =>{
    return (
        <Card name={text} img = {LondonEye} alt ='londoneye'></Card>
    );
};

export default Attractions;