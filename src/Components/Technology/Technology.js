import React, {useEffect, useState} from 'react'
import './Technology.css'
import Nav from '../Nav/Nav'
import data from '../../Data/data.json'
import Vehicule from './Vehicule/Vehicule';
import Spaceport from './Spaceport/Spaceport';
import Capsule from './Capsule/Capsule';

function Technology() {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    
    const techData = data.technology[0]

    const [technoSection, setTechnoSection] = useState("vehicule")
    const changeCrewSection = (state) => {
        setTechnoSection(state)
    }

    const techImg = require(`../../assets/technology/image-${technoSection}-portrait.jpg`)
    const smallTechImg = require(`../../assets/technology/image-${technoSection}-landscape.jpg`)
    
    return (
        <div className='technology-main'>
            <Nav />
            <div className="technology-container">
                <div className='technology-title'><h1>03 Space lunch 101</h1> </div>
                <div className='technology-section'>
                    <div className="technology-left">
                    <div className="text-container">
                        <div className="page-numbers">
                            <div className={'number '.concat(technoSection === "vehicule" ? 'page-active': '')} onClick={() => changeCrewSection("vehicule")}>1</div>
                            <div className={'number '.concat(technoSection === "spaceport" ? 'page-active': '')} onClick={() => changeCrewSection("spaceport")}>2</div>
                            <div className={'number '.concat(technoSection === "capsule" ? 'page-active': '')} onClick={() => changeCrewSection("capsule")}>3</div>
                        </div>
                            {technoSection === "vehicule" && <Vehicule /> }
                            {technoSection === "spaceport" && <Spaceport /> }
                            {technoSection === "capsule" && <Capsule /> }
                    </div>
                </div>
                    <div className="technology-right">
                        {
                            windowDimensions.width <= 1200 ? <img src={smallTechImg} alt="" /> : <img src={techImg} alt="" />
                        }
                </div>
                </div>

            </div>
        </div>
    )
}

export default Technology
