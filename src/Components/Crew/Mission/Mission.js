import React from 'react'
import data from '../../../Data/data.json'

function Mission() {
    const crewData = data.crew[1];
    return (
        <section className='crew-section'>
            <h2 className="job">{crewData.role}</h2>
            <h2 className="job name"> {crewData.name} </h2>
            <p className='bio'> {crewData.bio} </p>
        </section>
    )
}

export default Mission
