import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from "react-router-dom";

function OneBeer() {
    const {id} = useParams()
    const [singleBeer, setSingleBeer] = useState()

    useEffect(() => {
        const getBeer = async () => {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        setSingleBeer(response.data);
        }
        getBeer();
    }, []);

    return singleBeer ? (
        <>
            <header className="Header">
                <Link to={'/'}>Home</Link>
            </header>
            <div className='one-beer'>
               <img src={singleBeer.image_url} alt="beer"/> 
               <h2>{singleBeer.name}</h2>
               <p>{singleBeer.tagline}</p>
               <p>{singleBeer.first_brewed}</p>
               <p>{singleBeer.attenuation_level}</p>
               <p>{singleBeer.description}</p>
               <p>{singleBeer.contributed_by}</p>
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

export default OneBeer;