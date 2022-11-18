import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react'

function AllBeers() {
const [beers, setBeers] = useState([]);

//Call API on mounting to get all the beers using axios
useEffect(() => {
    const getBeers = async () => {
        let result = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        setBeers(result.data);
    }
    getBeers();
}, [])

console.log(beers);

    return (
        <>
        <header className="Header">
            <Link to={'/'}>Home</Link>
        </header>
        {beers.map(({_id, image_url, name, tagline, contributed_by}) => (
            <div key={_id} className="beers-list">
                <Link className="beers-list-text" to={`/beers/${_id}`}>
                    <img src={image_url} alt="beer" />
                    <h2>{name}</h2>
                    <p>{tagline}</p>
                    <p>Created by: {contributed_by}</p>
                </Link>
            </div>
        ))}
        
        </>
    )
}

export default AllBeers;