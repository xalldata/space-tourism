import React, { useState } from 'react'
import './Home.css'
import Nav from '../Nav/Nav'

function Home() {
    const [wrapper, setWrapper] = useState(false)

    return (
        <main className='home'>
           <Nav /> 
            <div className="hero">
                <div className="left">
                    <span className='home-subtitle'>So, you want to travel to</span>
                    <h1 className='title home-title'>Space</h1>
                    <p className='home-paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="right">
                   <div className={'home-button-wrapper '.concat(wrapper ? "active-home-button" : "")}>
                    <div className="home-button"
                        onMouseEnter={() => setWrapper(true)}
                        onMouseLeave={() => setWrapper(false)} >
                        Explore
                    </div>
                   </div>
                </div>
            </div>
        </main>
    )
}

export default Home
