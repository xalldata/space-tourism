import React, { useState } from 'react'
import './Crew.css'
import Nav from '../Nav/Nav'
import Commander from './Commander/Commander';
import Mission from './Mission/Mission';
import Pilot from './Pilot/Pilot';
import Flight from './Flight/Flight';

function Crew() {
    const [crewSection, setCrewSection] = useState("commander");
    const crewImg = require(`../../assets/crew/image-${crewSection}.png`);
    const changeCrewSection = (state) => {
        setCrewSection(state)
    }
    return (
        <div className='crew-main'>
            <Nav />
            <div className="crew-content">
                <div className="crew-left">
                    <h1 className='crew-title'>02 Meet your crew</h1>
                    {crewSection === "commander" && <Commander /> }
                    {crewSection === "mission" && <Mission /> }
                    {crewSection === "pilot" && <Pilot /> }
                    {crewSection === "flight" && <Flight /> }
                    <div className="circles">
                        <div className={'circle '.concat(crewSection === "commander" ? 'circle-active': '')}onClick={() => changeCrewSection("commander")}></div>
                        <div className={'circle '.concat(crewSection === "mission" ? 'circle-active': '')} onClick={() => changeCrewSection("mission")}></div>
                        <div className={'circle '.concat(crewSection === "pilot" ? 'circle-active': '')} onClick={() => changeCrewSection("pilot")}></div>
                        <div className={'circle '.concat(crewSection === "flight" ? 'circle-active': '')} onClick={() => changeCrewSection("flight")}></div>
                    </div>
                </div>
                <div className="crew-right">
                  <img src={crewImg} alt="" height="90%" /> 
                </div>
            </div>
            
        </div>
    )
}

export default Crew
