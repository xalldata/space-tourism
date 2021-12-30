import React from 'react'
import '../../Destination/DestinationPage/DestinationPage.css'
import data from '../../../Data/data.json'

function Mars() {
    const moonData = data.destinations[1]
    return (
       <section>
            <h1 className='destination-title'>{moonData.name}</h1>
                <p className='destination-paragraph'>{moonData.description} </p>
                <div className="destination-line"></div>
                <div className="distance">
                    <div className='distance-left'>
                        <h4>AVG. distance</h4>
                        <span> {moonData.distance} </span>
                    </div>
                    <div className='distance-right'>
                        <h4>EST. Travel time</h4>
                        <span> {moonData.travel} </span>
                    </div>
                </div>
        </section>
    )
}

export default Mars
