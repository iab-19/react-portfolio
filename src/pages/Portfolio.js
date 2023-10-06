import React from 'react';
import weather from '../assets/Portfolio-images/weather.png';
import scheduler from '../assets/Portfolio-images/workday.png';
import kanye from '../assets/Portfolio-images/kanye.png';
import readme from '../assets/Portfolio-images/readme.png';
import svg from '../assets/logo.svg';
import employee from '../assets/Portfolio-images/employee.png';

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h1>Portfolio</h1>
            <p>Here are the projects I have completed</p>
            <div>
                <p>Odd Quote Out: Kanye Edition</p>
                <a href='https://iab-19.github.io/odd_quote_out_kanye_edition/'><img src={kanye} alt='Odd Quote Out' className='portfolio-image'></img></a>
            </div>

            <div>
                <p>SVG Logo Generator</p>
                <a href='#'><img src={svg} alt='SVG Generator' className='portfolio-image'></img></a>
            </div>

            <div>
                <p>Professional README Generator</p>
                <a href='#'><img src={readme} alt='readme generator' className='portfolio-image'></img></a>
            </div>

            <div>
                <p>Employee Tracker</p>
                <a href='#'><img src={employee} alt='Employee Tracker' className='portfolio-image'></img></a>
            </div>

            <div>
                <p>Weather Dashboard</p>
                <a href='https://iab-19.github.io/weather_dashboard/'><img src={weather} alt='Weather Dashboard' className='portfolio-image'></img></a>
            </div>

            <div>
                <p>Workday Scheduler</p>
                <a href='https://iab-19.github.io/work-day-scheduler/'><img src={scheduler} alt='Workday Scheduler' className='portfolio-image'></img></a>
            </div>


        </section>
    )
}
