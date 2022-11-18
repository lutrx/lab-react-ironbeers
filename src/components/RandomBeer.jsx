import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';
import React from 'react'

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState()

    useEffect(() => {
        const getRandom = async () => {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            setRandomBeer(response.data);
        }
        getRandom();
    }, []);

    return randomBeer ? (
        <>
        <header className="Header">
            <Link to={'/'}>Home</Link>
        </header>
        <div className='one-beer'>
               <img src={randomBeer.image_url} alt="beer"/> 
               <h2>{randomBeer.name}</h2>
               <p>{randomBeer.tagline}</p>
               <p>{randomBeer.first_brewed}</p>
               <p>{randomBeer.attenuation_level}</p>
               <p>{randomBeer.description}</p>
               <p>{randomBeer.contributed_by}</p>
        </div>
        </>
    ) : (
        <>
        <header className="Header">
                <Link to={'/'}>Home</Link>
        </header>
        <h1>Loading...</h1>
        </>
    )
}

export default RandomBeer;