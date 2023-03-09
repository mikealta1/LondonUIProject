import React from 'react';
import Card from '../components/Card';
import TowerHotel from './images/TowerHotel.jpg'
import WaldorfHilton from './images/WaldorfHotel.jpg'
import RitzHotel from './images/ritzHotel.jpg'

const towerHotel = "The Tower Hotel"
const towerHotelLink = "https://goo.gl/maps/HfPBTJZxsWh9FqEf6"
const towerHotelDesc = "The Tower Hotel is a large hotel situated on the north bank of the River Thames, on the east side of Tower Bridge, in London. The hotel was designed by the Renton Howard Wood Partnership, constructed by Taylor Woodrow for owners J. Lyons & Co., and opened in September 1973 by the Constable of the Tower of London, Sir Richard Hull. It was built in a Brutalist style and was voted the second most hated building in London in a 2006 BBC poll."

const waldorfHilton = "Waldorf Hilton"
const waldorfHiltonLink = "https://goo.gl/maps/L8NUpUstUDDmXKEs5"
const waldorfHiltonDesc = "The Waldorf Hilton, London, formerly known as the Waldorf Hotel, is a historic hotel in the Aldwych, London. It is part of the Hilton Hotels & Resorts chain and has a history dating back to 1908. The hotel was originally established by William Waldorf Astor, 1st Viscount Astor, a member of the prominent Astor family. The hotel features 298 guest rooms, including 19 suites"

const ritzHotel = "The Ritz Hotel"
const ritzHotelLink = "https://goo.gl/maps/jNN4zp9RApQhbtX99"
const ritzHotelDesc = "The Ritz London is a Grade II listed 5-star hotel in Piccadilly, London, England. A symbol of high society and luxury, the hotel is one of the world's most prestigious and best known. The Ritz has become so associated with luxury and elegance that the word 'ritzy' has entered the English language to denote something that is ostentatiously stylish, fancy, or fashionable. The hotel was opened by Swiss hotelier César Ritz in 1906, eight years after he established the Hôtel Ritz Paris. It began to gain popularity towards the end of World War I, with politicians, socialites, writers and actors in particular. David Lloyd George held a number of secret meetings at the Ritz in the latter half of the war, and it was at the Ritz that he made the decision to intervene on behalf of Greece against Turkey. Noël Coward was a notable diner at the Ritz in the 1920s and 1930s."

const Hotels = () =>{
    return (
        <>
        <Card name={towerHotel} link={towerHotelLink} desc = {towerHotelDesc} img={TowerHotel} alt='tower hotel'></Card>
        <Card name={waldorfHilton} link = {waldorfHiltonLink} desc = {waldorfHiltonDesc} img={WaldorfHilton} alt='waldorf hilton'></Card>
        <Card name={ritzHotel} link = {ritzHotelLink} desc = {ritzHotelDesc} img={RitzHotel} alt='ritz hotel'></Card>
        </>
    );
};

export default Hotels;