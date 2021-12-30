import React from 'react'
import data from '../../../Data/data.json'

function Capsule() {
    const techData = data.technology[2]
    return (
        <div className='technology-text'>
            <span>the terminology...</span>
            <h2 className="technology-name"> {techData.name} </h2>
            <p>{techData.description}</p>
        </div>
    )
}

export default Capsule
