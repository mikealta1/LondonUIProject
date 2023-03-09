import React from 'react';
import Card from '../components/Card';
import LondonEye from "./images/londoneye.jpg"
import Thames from "./images/thamesriver.jpg"
import BigBen from "./images/bigben.jpg"
import TowerLondon from "./images/towerLondon.jpg"

const londonEye = "London Eye"
const londonEyeLink = "https://goo.gl/maps/AUqLcRYQwkgysMoA7"
const londonEyeDesc = "The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. It is Europe's tallest cantilevered observation wheel, and the most popular paid tourist attraction in the United Kingdom with over three million visitors annually. It has made many appearances in popular culture. The structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft). When it opened to the public in 2000 it was the world's tallest Ferris wheel. "
const thames = "The River Thames"
const thamesLink = "https://www.google.com/maps/place/River+Thames/@51.5741508,-0.8894186,10z/data=!3m1!4b1!4m6!3m5!1s0x4876bbf89bbb8507:0x9df0a1a42cce12a2!8m2!3d51.5631569!4d-0.6943111!16zL20vMGQya3Q"
const thamesDesc = "The River Thames, known alternatively in parts as the River Isis, is a river that flows through southern England including London. At 215 miles (346 km), it is the longest river entirely in England and the second-longest in the United Kingdom, after the River Severn."
const bigBen = "Big Ben"
const bigBenLink = "https://www.google.com/maps/place/Big+Ben/@51.5007292,-0.1946632,13z/data=!4m15!1m7!3m6!1s0x487604c38c8cd1d9:0xb78f2474b9a45aa9!2sBig+Ben!8m2!3d51.5007292!4d-0.1246254!16zL20vMDI2eWRj!3m6!1s0x487604c38c8cd1d9:0xb78f2474b9a45aa9!8m2!3d51.5007292!4d-0.1246254!15sCgdiaWcgYmVuWgkiB2JpZyBiZW6SARFjdWx0dXJhbF9sYW5kbWFya-ABAA!16zL20vMDI2eWRj"
const bigBenDesc = "Big Ben is the nickname for the Great Bell of the Great Clock of Westminster, at the north end of the Palace of Westminster in London, England, and the name is frequently extended to refer also to the clock and the clock tower. The official name of the tower in which Big Ben is located was originally the Clock Tower, but it was renamed Elizabeth Tower in 2012 to mark the Diamond Jubilee of Elizabeth II."
const towerLondon = "Tower of London"
const towerLondonLink = "https://goo.gl/maps/4kepHEjWmAZTPKDy7"
const towerLondonDesc = "The Tower of London, officially His Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle on the north bank of the River Thames in central London. It lies within the London Borough of Tower Hamlets, which is separated from the eastern edge of the square mile of the City of London by the open space known as Tower Hill. It was founded toward the end of 1066 as part of the Norman Conquest. The White Tower, which gives the entire castle its name, was built by William the Conqueror in 1078 and was a resented symbol of oppression, inflicted upon London by the new Norman ruling class. The castle was also used as a prison from 1100 (Ranulf Flambard) until 1952 (Kray twins), although that was not its primary purpose. A grand palace early in its history, it served as a royal residence. As a whole, the Tower is a complex of several buildings set within two concentric rings of defensive walls and a moat. There were several phases of expansion, mainly under kings Richard I, Henry III, and Edward I in the 12th and 13th centuries. The general layout established by the late 13th century remains despite later activity on the site."

const Attractions = () =>{
    return (
        <>
        <Card name={londonEye} link={londonEyeLink} desc = {londonEyeDesc} img={LondonEye} alt='londoneye'></Card>
        <Card name={thames} link = {thamesLink} desc = {thamesDesc} img={Thames} alt='thames river'></Card>
        <Card name={bigBen} link = {bigBenLink} desc = {bigBenDesc} img={BigBen} alt='big ben'></Card>
        <Card name={towerLondon} link = {towerLondonLink} desc = {towerLondonDesc} img={TowerLondon} alt='tower of london'></Card>
        </>
    );
};

export default Attractions;