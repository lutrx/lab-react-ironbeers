import { Link, Navigate } from "react-router-dom";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'


function NewBeer() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState('')

    const handleSubmit = async event => {
        try {
            console.log(name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by);
           event.preventDefault()
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
             headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}),
        }     )
       
        const parsed = await response.json()
    
        navigate(`/beers`) 
        } catch (error) {
            console.log(error);
        }
        
    }



    return (
        <>
        <header className="Header">
            <Link to={'/'}>Home</Link>
        </header>
        <div>
            <form onSubmit={handleSubmit} className="new-beer">
                <label>
                    Name <input className="input-field" value={name} type='text' onChange={event => setName(event.target.value)} />
                </label>
                <label>
                    Tagline <input className="input-field" value={tagline} type='text' onChange={event => setTagline(event.target.value)} />
                </label>
                <label>
                    Description <input className="input-field" value={description} type='text' onChange={event => setDescription(event.target.value)} />
                </label>
                <label>
                    First Brewed <input className="input-field" value={first_brewed} type='text' onChange={event => setFirst_brewed(event.target.value)} />
                </label>
                <label>
                    Brewers Tips <input className="input-field" value={brewers_tips} type='text' onChange={event => setBrewers_tips(event.target.value)} />
                </label>
                <label>
                    Attenuation Level <input className="input-field" value={attenuation_level} type='number' onChange={event => setAttenuation_level(event.target.value)} />
                </label>
                <label>
                    Contributed by <input className="input-field" value={contributed_by} type='text' onChange={event => setContributed_by(event.target.value)} />
                </label>
                <button type="submit" className="btn-create">ADD NEW</button>
            </form>
        </div>
        </>
    )
}

export default NewBeer;