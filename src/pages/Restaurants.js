import React from 'react';
import Card from '../components/Card';
import RitzRest from './images/ritzrest.jpg'
import RulesRest from './images/rulesrest.jpg'
import IvyRest from './images/ivyrest.jpg'

const ritzRest = "The Ritz Restaurant"
const ritzRestLink = "https://goo.gl/maps/SghQ2ygYqCB31hMZ9"
const ritzRestDesc = "Located in and part of The Ritz Hotel it has a huge dining hall that overlooks the terrace and garden. It is heavily decorated with bronze ornaments and Cesar Ritz was glad that the entire building was built of steel or else he was scared it would fall from the weight of all the bronze."

const rulesRest = "Rules Restaurant"
const rulesRestLink =""
const rulesRestDesc = "Rules is a London restaurant on Maiden Lane in Covent Garden. Rules was founded in 1798 by Thomas Rule, and describes itself as London's oldest restaurant."

const ivyRest = "The Ivy"
const ivyRestLink = ""
const ivyRestDesc = "The Ivy is a British restaurant which is known for being popular with celebrities. It is located on West Street near Cambridge Circus in London, opposite the Ambassadors and St Martin's theatres, making it a popular restaurant for theatergoers. The Ivy has locations around the world."

const Restaurants = () =>{
    return (
        <>
        <Card name={ritzRest} link={ritzRestLink} desc = {ritzRestDesc} img={RitzRest} alt='ritz rest'></Card>
        <Card name={rulesRest} link = {rulesRestLink} desc = {rulesRestDesc} img={RulesRest} alt='rules restaurant'></Card>
        <Card name={ivyRest} link = {ivyRestLink} desc = {ivyRestDesc} img={IvyRest} alt='the ivy'></Card>
        </>
    );
};

export default Restaurants;