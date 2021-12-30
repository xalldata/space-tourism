import React, { useState } from 'react'
import './DestinationPage.css'
import Nav from '../../Nav/Nav'
import Moon from '../Moon/Moon'
import Mars from '../Mars/Mars';
import Europa from '../Europa/Europa';
import Titan from '../Titan/Titan';

function DestinationPage() {

    const [destinationSection, setDestinationSection] = useState("moon");
    const planetImg = require(`../../../assets/destination/image-${destinationSection}.png`);

    const changeDestinationSection = (state) => {
        setDestinationSection(state)
    }
    return (
        
            <div className='destination-main'>
                <Nav />
                <div className="destination-container">
                    <h1 className='page-title'>01 Pick your destination</h1>
                  <div className="planet-content">
                        <div className="planet-left">
                            <img src={planetImg} alt="" width="80%" height="80%" />
                        </div>
                    <div className="planet-right">
                        <ul className="planet-links">
                            <li className={destinationSection === "moon" ? 'destination-active': ''} onClick={() => changeDestinationSection("moon")}>Moon</li>
                            <li className={destinationSection === "mars" ? 'destination-active': ''}  onClick={() => changeDestinationSection("mars")}>Mars</li>
                            <li className={destinationSection === "europa" ? 'destination-active': ''}  onClick={() => changeDestinationSection("europa")}>Europa</li>
                            <li className={destinationSection === "titan" ? 'destination-active': ''}  onClick={() => changeDestinationSection("titan")}>Titan</li>
                        </ul>
                            {destinationSection === "moon" && <Moon />}
                            {destinationSection === "mars" && <Mars />}
                            {destinationSection === "europa" && <Europa />}
                            {destinationSection === "titan" && <Titan />}

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DestinationPage
